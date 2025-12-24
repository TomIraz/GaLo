
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
    image: '/images/carteras/ema-verde.jpg',
    images: [
      '/images/carteras/ema-verde.jpg',
      '/images/carteras/ema-verde.jpg',
      '/images/carteras/ema-verde.jpg',
      '/images/carteras/ema-verde.jpg',
      '/images/carteras/ema-verde.jpg'
    ],
    dimensions: {
      height: '35 cm',
      width: '40 cm',
      depth: '12 cm',
      strap: 'Correa: 60 cm (regulable)'
    },
    features: [
      'Cierre magnético de alta calidad',
      'Forro interior de tela suave',
      'Bolsillo interno con cierre',
      'Correa de cuero 100% genuino',
      'Tejido 100% a mano',
      'Lavable con agua fría'
    ],
    material: 'Cordón de polipropileno importado',
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre. No usar lavadora.'
  },
  {
    id: '2',
    name: 'Cartera Eva Gris',
    price: 75.00,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/eva-gris.jpg',
    images: [
      '/images/carteras/eva-gris.jpg',
      '/images/carteras/eva-gris.jpg',
      '/images/carteras/eva-gris.jpg',
      '/images/carteras/eva-gris.jpg'
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
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.'
  },
  {
    id: '3',
    name: 'Cartera Cami Beige',
    price: 75.00,
    category: 'Cordón de Polipropileno',
    description: 'Nuestra clásica de polipropileno. Resistente, lavable y perfecta para el uso diario. Tejido firme que no pierde la forma.',
    image: '/images/carteras/cami-beige.jpg',
    images: [
      '/images/carteras/cami-beige.jpg',
      '/images/carteras/cami-beige.jpg',
      '/images/carteras/cami-beige.jpg',
      '/images/carteras/cami-beige.jpg'
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
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.'
  },
  {
    id: '5',
    name: 'Cinturón',
    price: 25.00,
    category: 'Accesorios',
    description: 'Cinturón elástico tejido manualmente. Hebilla metálica de alta calidad. Disponible en varios colores tierra.',
    image: '/images/accesorios/cinturones-fondo-blanco.jpg',
    images: [
      '/images/accesorios/cinturones-fondo-blanco.jpg',
      '/images/accesorios/cinturones-fondo-blanco.jpg',
      '/images/accesorios/cinturones-fondo-blanco.jpg'
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
    careInstructions: 'Lavar a mano con agua fría. Secar al aire.'
  },
  {
    id: '4',
    name: 'Mini Gala Terracota',
    price: 45.00,
    category: 'Minis',
    description: 'El mismo diseño de cordón en tamaño compacto. Ideal para llevar solo lo esencial con un toque artesanal.',
    image: '/images/carteras/mini-gala-terracota.jpg',
    images: [
      '/images/carteras/mini-gala-terracota.jpg',
      '/images/carteras/mini-gala-terracota.jpg',
      '/images/carteras/mini-gala-terracota.jpg',
      '/images/carteras/mini-gala-terracota.jpg',
      '/images/carteras/mini-gala-terracota.jpg'
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
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.'
  },
  {
    id: '6',
    name: 'Porta Celular Nudo',
    price: 30.00,
    category: 'Accesorios',
    description: 'Accesorio de cordón trenzado para llevar el celular con comodidad. Correa larga para usar cruzado.',
    image: '/images/accesorios/porta-celular-nudo.jpg',
    images: [
      '/images/accesorios/porta-celular-nudo.jpg',
      '/images/accesorios/porta-celular-nudo.jpg',
      '/images/accesorios/porta-celular-nudo.jpg'
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
    careInstructions: 'Limpiar con paño húmedo. Lavar a mano si es necesario.'
  },
  {
    id: '7',
    name: 'Mini Cordón Crudo',
    price: 45.00,
    category: 'Minis',
    description: 'Pequeña, ligera y elegante. El color crudo natural resalta la trama del tejido hecho a mano.',
    image: '/images/carteras/mini-cordon-crudo.jpg',
    images: [
      '/images/carteras/mini-cordon-crudo.jpg',
      '/images/carteras/mini-cordon-crudo.jpg',
      '/images/carteras/mini-cordon-crudo.jpg',
      '/images/carteras/mini-cordon-crudo.jpg'
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
    careInstructions: 'Lavar con agua fría y jabón neutro. Dejar secar al aire libre.'
  },
  {
    id: '8',
    name: 'Belt Pack GaLo',
    price: 55.00,
    category: 'Accesorios',
    description: 'Set de cinturón y pequeño charm decorativo para personalizar tus looks.',
    image: '/images/accesorios/belt-pack-galo.jpg',
    images: [
      '/images/accesorios/belt-pack-galo.jpg',
      '/images/accesorios/belt-pack-galo.jpg',
      '/images/accesorios/belt-pack-galo.jpg'
    ],
    dimensions: {
      height: '4 cm',
      width: '85 cm',
      depth: '1 cm',
      strap: 'Incluye charm decorativo'
    },
    features: [
      'Cinturón tejido a mano',
      'Charm decorativo incluido',
      'Hebilla metálica',
      'Set completo',
      'Diseño exclusivo GaLo'
    ],
    material: 'Cordón de polipropileno y detalles metálicos',
    careInstructions: 'Lavar a mano con agua fría. Secar al aire.'
  }
];

export const CATEGORIES: { name: string; id: any }[] = [
  { name: 'Todo', id: null },
  { name: 'Polipropileno', id: 'Cordón de Polipropileno' },
  { name: 'Minis', id: 'Minis' },
  { name: 'Accesorios', id: 'Accesorios' }
];
