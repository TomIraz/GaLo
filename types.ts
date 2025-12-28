
export type Category = 'Carteras' | 'Accesorios';
export type SubCategory = 'Tote Bag' | 'Bandolera' | 'Cinturón' | 'Porta Celular' | 'Pulsera';
export type CategoryFilter = 'Todo' | 'Tote Bag' | 'Bandolera' | 'Cinturón' | 'Porta Celular' | 'Pulsera';
export type View = 'home' | 'carteras' | 'accesorios' | 'contacto' | 'como-comprar' | 'donde-estamos' | 'nuestras-carteras';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  subCategory?: SubCategory;
  image: string;
  images?: string[];
  description: string;
  isNew?: boolean;
  dimensions?: {
    height: string;
    width: string;
    depth: string;
    strap: string;
  };
  features?: string[];
  material?: string;
  careInstructions?: string;
  availableColors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
