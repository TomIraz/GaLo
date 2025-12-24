
import { Product } from './types';

// Para usar tus propias imágenes:
// 1. Guarda tus fotos en: /root/GaLo/frontend/public/images/carteras/ o /accesorios/
// 2. Nombra tus archivos descriptivamente (ej: cartera-tote-canela.jpg)
// 3. Reemplaza las URLs con: /images/carteras/nombre-archivo.jpg

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cartera Ema Verde Oliva',
    price: 90.00,
    category: 'Cordón de Polipropileno',
    description: 'Diseño amplio de hombro con detalle de cuero en la base de la correa. Textura rica y color vibrante.',
    image: '/images/carteras/ema-verde.jpg'
  },
  {
    id: '2',
    name: 'Cartera Eva Gris',
    price: 75.00,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/eva-gris.jpg'
  },
  {
    id: '3',
    name: 'Cartera Cami Beige',
    price: 75.00,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/cami-beige.jpg'
  },
  {
    id: '5',
    name: 'Cinturón',
    price: 25.00,
    category: 'Accesorios',
    description: 'Cinturón elástico tejido manualmente. Hebilla metálica de alta calidad. Disponible en varios colores tierra.',
    image: '/images/accesorios/cinturones-fondo-blanco.jpg' // Reemplaza con tu foto
  },
  {
    id: '4',
    name: 'Mini Gala Terracota',
    price: 45.00,
    category: 'Minis',
    description: 'El mismo diseño de cordón en tamaño compacto. Ideal para llevar solo lo esencial con un toque artesanal.',
    image: '/images/carteras/mini-gala-terracota.jpg', // Reemplaza con tu foto
    isNew: true
  },
  {
    id: '6',
    name: 'Porta Celular Nudo',
    price: 30.00,
    category: 'Accesorios',
    description: 'Accesorio de cordón trenzado para llevar el celular con comodidad. Correa larga para usar cruzado.',
    image: '/images/accesorios/porta-celular-nudo.jpg' // Reemplaza con tu foto
  },
  {
    id: '7',
    name: 'Mini Cordón Crudo',
    price: 45.00,
    category: 'Minis',
    description: 'Pequeña, ligera y elegante. El color crudo natural resalta la trama del tejido hecho a mano.',
    image: '/images/carteras/mini-cordon-crudo.jpg' // Reemplaza con tu foto
  },
  {
    id: '8',
    name: 'Belt Pack GaLo',
    price: 55.00,
    category: 'Accesorios',
    description: 'Set de cinturón y pequeño charm decorativo para personalizar tus looks.',
    image: '/images/accesorios/belt-pack-galo.jpg' // Reemplaza con tu foto
  }
];

export const CATEGORIES: { name: string; id: any }[] = [
  { name: 'Todo', id: null },
  { name: 'Polipropileno', id: 'Cordón de Polipropileno' },
  { name: 'Minis', id: 'Minis' },
  { name: 'Accesorios', id: 'Accesorios' }
];
