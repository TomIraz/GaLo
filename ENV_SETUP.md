# Configuración de Variables de Ambiente

Este documento explica cómo configurar las variables de ambiente para el proyecto GaLo.

## 🔒 Seguridad Primero

**IMPORTANTE**: Lee [SECURITY.md](SECURITY.md) para entender qué variables son seguras y cuáles no.

Solo las variables con prefijo `VITE_` están disponibles en el frontend. Las demás son privadas y solo se usan en backend.

## Setup Inicial

1. **Copiá el archivo de ejemplo:**
   ```bash
   cp .env.example .env
   ```

2. **Editá el archivo `.env` con tus valores reales:**
   - Abrí `.env` con tu editor de texto
   - Reemplazá los valores de ejemplo con tus datos reales

3. **Verificá que `.env` NO se suba a Git:**
   ```bash
   git status
   # .env NO debe aparecer en la lista
   ```

## Variables Importantes

### VITE_WHATSAPP_NUMBER (Requerida)
**Formato:** Número internacional sin símbolos (+, -, espacios)

**Ejemplo para Argentina:**
- Tu número: `+54 9 11 1234-5678`
- En `.env`: `VITE_WHATSAPP_NUMBER=5491112345678`

**Formato desglosado:**
- `54` = Código de país (Argentina)
- `9` = Prefijo para celulares (siempre va)
- `11` = Código de área (Buenos Aires)
- `12345678` = Tu número

### GEMINI_API_KEY (Opcional)
Solo si usás funcionalidades de IA con Google Gemini.

### Otras Variables
Las demás variables son opcionales y podés configurarlas según tus necesidades.

## Uso en el Código

### Frontend (React)
Las variables que empiezan con `VITE_` están disponibles en el frontend:

```typescript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const instagramUser = import.meta.env.VITE_INSTAGRAM_USERNAME;
```

### Build/Server
Las variables sin prefijo `VITE_` solo están disponibles durante el build:

```typescript
// En vite.config.ts
const apiKey = env.GEMINI_API_KEY;
```

## Seguridad

⚠️ **IMPORTANTE:**
- `.env` está en `.gitignore` y **NO debe subirse a Git**
- No compartas tu archivo `.env` con nadie
- Usá `.env.example` para compartir la estructura sin valores sensibles

## Variables por Ambiente

Podés crear archivos específicos por ambiente:

- `.env.local` - Solo local, nunca se sube a git
- `.env.development` - Desarrollo
- `.env.production` - Producción

Vite los carga automáticamente según el modo en que ejecutes el proyecto.

## Troubleshooting

### "Cannot find VITE_WHATSAPP_NUMBER"
- Verificá que el archivo `.env` existe en la raíz del proyecto
- Verificá que la variable empieza con `VITE_`
- Reiniciá el servidor de desarrollo (`npm run dev`)

### TypeScript no reconoce las variables
- El archivo `vite-env.d.ts` debe existir en la raíz
- Verificá que está declarada la interfaz `ImportMetaEnv`
- Reiniciá VS Code o tu editor

## Ejemplo Completo

```env
# .env
VITE_WHATSAPP_NUMBER=5491112345678
VITE_INSTAGRAM_USERNAME=galo_carteras
VITE_CONTACT_EMAIL=contacto@galocarteras.com
GEMINI_API_KEY=tu_api_key_aqui
```