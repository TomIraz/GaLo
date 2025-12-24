
export type Category = 'Cordón de Polipropileno' | 'Minis' | 'Accesorios';
export type MaterialFilter = 'Todo' | 'Polipropileno';
export type View = 'home' | 'carteras' | 'accesorios' | 'contacto' | 'como-comprar' | 'donde-estamos' | 'nuestras-carteras';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
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
}

export interface CartItem extends Product {
  quantity: number;
}
