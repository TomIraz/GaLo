import { PriceData, PriceCache } from '../types/pricing';

const CACHE_KEY = 'galo_price_cache';
const CACHE_DURATION_KEY = 'galo_cache_duration';

class GoogleSheetsService {
  private memoryCache: Map<string, PriceData> | null = null;
  private lastFetchTime: number = 0;

  private getCacheDuration(): number {
    const duration = import.meta.env.VITE_PRICE_CACHE_DURATION;
    return duration ? Number.parseInt(duration) * 60 * 1000 : 30 * 60 * 1000; // Default 30 minutos
  }

  private isCacheValid(): boolean {
    const now = Date.now();
    const cacheDuration = this.getCacheDuration();
    return this.lastFetchTime > 0 && (now - this.lastFetchTime) < cacheDuration;
  }

  private buildSheetUrl(): string {
    const sheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID;
    const gid = import.meta.env.VITE_GOOGLE_SHEETS_GID || '0';

    if (!sheetId) {
      throw new Error('VITE_GOOGLE_SHEETS_ID no está configurado');
    }

    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
  }

  private parseCsvToPriceData(csv: string): Map<string, PriceData> {
    const lines = csv.trim().split('\n');
    const priceMap = new Map<string, PriceData>();

    // Saltar la primera línea (headers)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Parse CSV line (simple split, asumiendo que no hay comas en los valores)
      const parts = line.split(',');
      if (parts.length < 5) continue;

      const productId = parts[0].trim();
      const price = Number.parseFloat(parts[2].trim());
      const lastUpdated = parts[3].trim();
      const active = parts[4].trim().toUpperCase() === 'TRUE';

      // Validar datos
      if (productId && !Number.isNaN(price) && price > 0) {
        priceMap.set(productId, {
          productId,
          price,
          lastUpdated,
          active
        });
      }
    }

    return priceMap;
  }

  private saveToLocalStorage(data: Map<string, PriceData>): void {
    try {
      const cache: PriceCache = {
        prices: Object.fromEntries(data),
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      localStorage.setItem(CACHE_DURATION_KEY, this.getCacheDuration().toString());
    } catch (error) {
      console.warn('No se pudo guardar el caché en localStorage:', error);
    }
  }

  private loadFromLocalStorage(): Map<string, PriceData> | null {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const cache: PriceCache = JSON.parse(cached);
      const now = Date.now();
      const cacheDuration = this.getCacheDuration();

      // Verificar si el caché está válido
      if ((now - cache.timestamp) < cacheDuration) {
        return new Map(Object.entries(cache.prices));
      }

      // Caché expirado, pero lo retornamos de todas formas como fallback
      return new Map(Object.entries(cache.prices));
    } catch (error) {
      console.warn('No se pudo cargar el caché desde localStorage:', error);
      return null;
    }
  }

  async fetchPrices(): Promise<Map<string, PriceData>> {
    // Si el caché en memoria es válido, retornarlo
    if (this.memoryCache && this.isCacheValid()) {
      return this.memoryCache;
    }

    // Intentar cargar desde localStorage primero
    const localCache = this.loadFromLocalStorage();

    try {
      const url = this.buildSheetUrl();
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const csvData = await response.text();
      const priceMap = this.parseCsvToPriceData(csvData);

      // Verificar que obtuvimos datos válidos
      if (priceMap.size === 0) {
        throw new Error('No se encontraron datos de precios en Google Sheets');
      }

      // Actualizar cachés
      this.memoryCache = priceMap;
      this.lastFetchTime = Date.now();
      this.saveToLocalStorage(priceMap);

      return priceMap;
    } catch (error) {
      console.error('Error al obtener precios de Google Sheets:', error);

      // Fallback: intentar usar caché local (aunque esté expirado)
      if (localCache && localCache.size > 0) {
        console.log('Usando caché local como respaldo');
        this.memoryCache = localCache;
        return localCache;
      }

      // Si no hay caché, lanzar error para activar fallback a precios hardcodeados
      throw error;
    }
  }

  clearCache(): void {
    this.memoryCache = null;
    this.lastFetchTime = 0;
    try {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_DURATION_KEY);
    } catch (error) {
      console.warn('No se pudo limpiar el caché:', error);
    }
  }
}

// Exportar instancia singleton
export const googleSheetsService = new GoogleSheetsService();
