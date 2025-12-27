
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cartera Eva',
    price: 54500,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/eva/eva-gris.jpg',
    images: [
      '/images/carteras/eva/eva-gris.jpg'
    ],
    dimensions: {
      height: '32 cm',
      width: '38 cm',
      depth: '10 cm',
      strap: 'Correa: 55 cm (regulable)'
    },
    features: [
      'Cierre con cremallera',
      'Forro interior de tela',
      'Bolsillo interno',
      'Correa de cuero genuino',
      'Tejido a mano',
      'Material impermeable'
    ],
    material: 'Cordón de polipropileno importado',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.',
    availableColors: ['Gris', 'Negro', 'Beige Claro', 'Verde Oliva', 'Bordó', 'Marrón Chocolate', 'Verde Militar', 'Habano', 'Yute', 'Beige Oscuro', 'Mostaza', 'Cobre', 'Azul', 'Bordó-Vino']
  },
  {
    id: '2',
    name: 'Cartera Cami',
    price: 52800,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/cami/cami-beige.jpg',
    images: [
      '/images/carteras/cami/cami-beige.jpg'
    ],
    dimensions: {
      height: '32 cm',
      width: '38 cm',
      depth: '10 cm',
      strap: 'Correa: 55 cm (regulable)'
    },
    features: [
      'Cierre magnético',
      'Forro interior de tela',
      'Bolsillo interno',
      'Correa de cuero genuino',
      'Tejido a mano',
      'Color neutro versátil'
    ],
    material: 'Cordón de polipropileno importado',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.',
    availableColors: ['Beige Claro', 'Beige Oscuro', 'Yute', 'Negro', 'Gris', 'Verde Oliva', 'Bordó', 'Marrón Chocolate', 'Verde Militar', 'Habano', 'Mostaza', 'Cobre', 'Azul', 'Bordó-Vino']
  },
  {
    id: '101',
    name: 'Mini Isa',
    price: 37000,
    category: 'Minis',
    description: 'El mismo diseño de cordón en tamaño compacto. Ideal para llevar solo lo esencial con un toque artesanal.',
    image: '/images/carteras/mini-isa/mini-isa-verde.jpg',
    images: [
      '/images/carteras/mini-isa/mini-isa-verde.jpg',
      '/images/carteras/mini-isa/mini-isa-verde-2.jpg',
      '/images/carteras/mini-isa/mini-isa-verde-abierta-1.jpg'
    ],
    isNew: true,
    dimensions: {
      height: '20 cm',
      width: '22 cm',
      depth: '8 cm',
      strap: 'Correa: 120 cm (para usar cruzada)'
    },
    features: [
      'Cierre magnético',
      'Forro interior',
      'Compartimento principal',
      'Correa de cuero',
      'Tamaño compacto',
      'Ideal para lo esencial'
    ],
    material: 'Cordón de polipropileno importado',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.',
    availableColors: ['Cobre', 'Negro', 'Beige Claro', 'Gris', 'Verde Oliva', 'Bordó', 'Marrón Chocolate', 'Verde Militar', 'Habano', 'Yute', 'Beige Oscuro', 'Mostaza', 'Azul', 'Bordó-Vino']
  },
  {
    id: '102',
    name: 'Mini Mara',
    price: 4500,
    category: 'Minis',
    description: 'Pequeña, ligera y elegante. El color crudo natural resalta la trama del tejido hecho a mano.',
    image: '/images/carteras/mini-mara/mini-mara-beige.jpg',
    images: [
      '/images/carteras/mini-mara/mini-mara-beige.jpg',
      '/images/carteras/mini-mara/mini-mara-beige-cerca.jpg',
      '/images/carteras/mini-mara/mini-mara-beige-cierre.jpg',
      '/images/carteras/mini-mara/mini-mara-herraje.jpg'
    ],
    dimensions: {
      height: '20 cm',
      width: '22 cm',
      depth: '8 cm',
      strap: 'Correa: 120 cm (para usar cruzada)'
    },
    features: [
      'Color natural crudo',
      'Cierre magnético',
      'Forro interior',
      'Correa de cuero',
      'Diseño minimalista',
      'Liviana y práctica'
    ],
    material: 'Cordón de polipropileno natural',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.',
    availableColors: ['Yute', 'Beige Claro', 'Beige Oscuro', 'Negro', 'Gris', 'Verde Oliva', 'Bordó', 'Marrón Chocolate', 'Verde Militar', 'Habano', 'Mostaza', 'Cobre', 'Azul', 'Bordó-Vino']
  },
  {
    id: '103',
    name: 'Mini Tokio',
    price: 4500,
    category: 'Minis',
    description: 'Pequeña, ligera y elegante. El color crudo natural resalta la trama del tejido hecho a mano.',
    image: '/images/carteras/mini-tokio/mini-tokio-marron.jpg',
    images: [
      '/images/carteras/mini-tokio/mini-tokio-marron.jpg',
      '/images/carteras/mini-tokio/mini-tokio-marron-arriba.jpg',
      '/images/carteras/mini-tokio/mini-tokio-marron-herraje.jpg'
    ],
    dimensions: {
      height: '20 cm',
      width: '22 cm',
      depth: '8 cm',
      strap: 'Correa: 120 cm (para usar cruzada)'
    },
    features: [
      'Color natural crudo',
      'Cierre magnético',
      'Forro interior',
      'Correa de cuero',
      'Diseño minimalista',
      'Liviana y práctica'
    ],
    material: 'Cordón de polipropileno natural',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.',
    availableColors: ['Yute', 'Beige Claro', 'Beige Oscuro', 'Negro', 'Gris', 'Verde Oliva', 'Bordó', 'Marrón Chocolate', 'Verde Militar', 'Habano', 'Mostaza', 'Cobre', 'Azul', 'Bordó-Vino']
  },
  {
    id: '201',
    name: 'Cinturón',
    price: 18000,
    category: 'Accesorios',
    description: 'Cinturón elástico tejido manualmente. Hebilla metálica de alta calidad. Disponible en varios colores tierra.',
    image: '/images/accesorios/cinturones/cinturones-fondo-blanco.jpg',
    images: [
      '/images/accesorios/cinturones/cinturones-fondo-blanco.jpg'
    ],
    dimensions: {
      height: '4 cm',
      width: '85 cm',
      depth: '0.5 cm',
      strap: 'Ajustable hasta 95 cm'
    },
    features: [
      'Hebilla metálica resistente',
      'Tejido elástico',
      'Disponible en varios colores',
      'Tejido a mano',
      'Unisex'
    ],
    material: 'Cordón de polipropileno elástico',
    careInstructions: 'Lavar a mano con agua fría. Secar al aire.',
    availableColors: ['Negro', 'Marrón Chocolate', 'Habano', 'Beige Oscuro', 'Gris', 'Verde Militar']
  },
  {
    id: '301',
    name: 'Porta Celular',
    price: 15000,
    category: 'Accesorios',
    description: 'Accesorio de cordón trenzado para llevar el celular con comodidad. Correa larga para usar cruzado.',
    image: '/images/accesorios/porta-celulares/porta-celulares-3.jpg',
    images: [
      '/images/accesorios/porta-celulares/porta-celulares-3.jpg',
      '/images/accesorios/porta-celulares/porta-celulares-3.jpg',
      '/images/accesorios/porta-celulares/porta-celulares-3.jpg'
    ],
    dimensions: {
      height: '18 cm',
      width: '11 cm',
      depth: '2 cm',
      strap: 'Correa: 130 cm'
    },
    features: [
      'Compartimento para celular',
      'Cierre con solapa',
      'Correa larga ajustable',
      'Diseño cruzado',
      'Tejido resistente'
    ],
    material: 'Cordón de polipropileno trenzado',
    careInstructions: 'Limpiar con paño húmedo. Lavar a mano si es necesario.',
    availableColors: ['Negro', 'Beige Claro', 'Verde Oliva', 'Marrón Chocolate', 'Gris', 'Bordó']
  },
  {
    id: '401',
    name: 'Pulsera',
    price: 15000,
    category: 'Accesorios',
    description: 'Accesorio de cordón trenzado para llevar el celular con comodidad. Correa larga para usar cruzado.',
    image: '/images/accesorios/pulseras/pulseras-colores.jpg',
    images: [
      '/images/accesorios/pulseras/pulseras-colores.jpg',
      '/images/accesorios/pulseras/pulseras-colores.jpg',
      '/images/accesorios/pulseras/pulseras-colores.jpg'
    ],
    dimensions: {
      height: '18 cm',
      width: '11 cm',
      depth: '2 cm',
      strap: 'Correa: 130 cm'
    },
    features: [
      'Compartimento para celular',
      'Cierre con solapa',
      'Correa larga ajustable',
      'Diseño cruzado',
      'Tejido resistente'
    ],
    material: 'Cordón de polipropileno trenzado',
    careInstructions: 'Limpiar con paño húmedo. Lavar a mano si es necesario.',
    availableColors: ['Negro', 'Beige Claro', 'Verde Oliva', 'Marrón Chocolate', 'Gris', 'Bordó']
  }
];

export const CATEGORIES: { name: string; id: any }[] = [
  { name: 'Todo', id: null },
  { name: 'Polipropileno', id: 'Cordón de Polipropileno' },
  { name: 'Minis', id: 'Minis' },
  { name: 'Accesorios', id: 'Accesorios' }
];
