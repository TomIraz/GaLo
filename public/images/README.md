# Cómo Agregar tus Fotos de Productos

## Estructura de Carpetas

```
public/
└── images/
    ├── carteras/       ← Fotos de carteras (todos los tipos)
    ├── accesorios/     ← Fotos de accesorios (cinturones, porta celular, etc.)
    └── README.md
```

## Pasos para Agregar tus Fotos

### 1. Prepara tus Imágenes
- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: 800x800 píxeles (mínimo)
- **Peso**: Menos de 500KB por imagen (optimiza para web)
- **Orientación**: Cuadrada o vertical funciona mejor

### 2. Guarda tus Fotos
Coloca tus imágenes en la carpeta correspondiente:
- **Carteras** → `public/images/carteras/`
- **Accesorios** → `public/images/accesorios/`

### 3. Nombra tus Archivos
Usa nombres descriptivos sin espacios:
- ✅ `cartera-tote-beige.jpg`
- ✅ `mini-cordon-negro.jpg`
- ✅ `cinturon-trenzado-marron.jpg`
- ❌ `foto 1.jpg`
- ❌ `IMG_2024.jpg`

### 4. Actualiza constants.tsx
Edita el archivo `frontend/constants.tsx` y cambia las rutas de imagen:

```tsx
{
  id: '1',
  name: 'Cartera Tote Cordón Canela',
  price: 85.00,
  category: 'Cordón',
  description: 'Descripción del producto...',
  image: '/images/carteras/tu-nombre-de-archivo.jpg',  ← Actualiza esto
  isNew: true
}
```

### 5. Agregar Nuevos Productos

Para agregar más productos, copia un producto existente y modifica los valores:

```tsx
{
  id: '9',  // Siguiente número disponible
  name: 'Nombre de tu Producto',
  price: 99.00,
  category: 'Cordón',  // Opciones: Cordón, Tela de Polipropileno, Minis, Accesorios
  description: 'Descripción detallada del producto',
  image: '/images/carteras/nombre-archivo.jpg',
  isNew: true  // Opcional: marca como "nuevo"
}
```

## Ejemplo Completo

Si tienes una foto llamada `cartera-azul.jpg`:

1. Guárdala en: `/root/GaLo/frontend/public/images/carteras/cartera-azul.jpg`
2. En `constants.tsx`, actualiza:
   ```tsx
   image: '/images/carteras/cartera-azul.jpg'
   ```
3. Guarda el archivo
4. Reinicia el servidor si está corriendo

## Tips
- Las imágenes deben tener buena iluminación
- Fondo neutro resalta mejor el producto
- Toma fotos desde diferentes ángulos y usa la mejor
- Comprime las imágenes antes de subirlas para mejor rendimiento
