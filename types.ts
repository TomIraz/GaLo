
export type Category = 'Cordón de Polipropileno' | 'Minis' | 'Accesorios';
export type MaterialFilter = 'Todo' | 'Polipropileno';
export type View = 'home' | 'carteras' | 'accesorios' | 'contacto' | 'como-comprar' | 'donde-estamos' | 'nuestras-carteras';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
