
export type Language = 'en' | 'hi' | 'pa' | 'mr' | 'kn' | 'ta';

export interface MandiData {
  id: string;
  date: string;
  state: string;
  district: string;
  mandi: string;
  crop: string;
  variety: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  source: 'eNAM' | 'Agmarknet' | 'State Portal';
  status: 'Fresh' | 'Stale' | 'Missing';
  lastUpdated: string;
}

export interface StateSummary {
  name: string;
  totalAPMCs: number;
  covered: number;
  eNAM: number;
  nonENAM: number;
  percentage: number;
}

export interface PriceAlert {
  id: string;
  crop: string;
  mandiA: string;
  priceA: number;
  mandiB: string;
  priceB: number;
  distance: number;
  gap: number;
}
