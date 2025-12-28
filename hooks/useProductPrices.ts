import { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { googleSheetsService } from '../services/googleSheetsService';
import { Product } from '../types';
import { PriceData } from '../types/pricing';

interface UseProductPricesReturn {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  useFallback: boolean;
}

export function useProductPrices(): UseProductPricesReturn {
  const [priceData, setPriceData] = useState<Map<string, PriceData> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadPrices() {
      try {
        const prices = await googleSheetsService.fetchPrices();
        setPriceData(prices);
        setError(null);
      } catch (err) {
        console.error('Error cargando precios:', err);
        setError(err instanceof Error ? err : new Error('Error desconocido'));
        // No seteamos priceData, quedará null y usaremos precios hardcodeados
      } finally {
        setIsLoading(false);
      }
    }

    loadPrices();
  }, []);

  // Mergear productos con precios de Google Sheets
  const products = useMemo(() => {
    if (!priceData || priceData.size === 0) {
      console.log('🔴 Using fallback prices - priceData is null or empty');
      // Usar precios hardcodeados
      return PRODUCTS;
    }

    console.log('🔍 DEBUG - priceData Map keys:', Array.from(priceData.keys()));
    console.log('🔍 DEBUG - Product IDs from constants:', PRODUCTS.map(p => ({ id: p.id, name: p.name })));

    // Sobrescribir precios con datos de Google Sheets
    return PRODUCTS.map(product => {
      const priceInfo = priceData.get(product.id);

      console.log(`🔎 Looking up ID "${product.id}" (${typeof product.id}):`,
        priceInfo ? `✅ FOUND - Price: ${priceInfo.price}` : '❌ NOT FOUND'
      );

      if (priceInfo && priceInfo.active) {
        console.log(`✅ Updating ${product.name}: ${product.price} → ${priceInfo.price}`);
        return {
          ...product,
          price: priceInfo.price
        };
      }

      // Si no hay precio en sheets o está inactivo, usar el hardcodeado
      console.log(`⚠️ Using hardcoded price for ${product.name}: ${product.price}`);
      return product;
    });
  }, [priceData]);

  return {
    products,
    isLoading,
    error,
    useFallback: !priceData || priceData.size === 0
  };
}
