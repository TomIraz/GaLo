export interface PriceData {
  productId: string;
  price: number;
  lastUpdated: string;
  active: boolean;
}

export interface PriceCache {
  prices: Record<string, PriceData>;
  timestamp: number;
}
