# 🔒 Guía de Seguridad - GaLo

Este documento describe las prácticas de seguridad implementadas y recomendaciones para mantener la aplicación segura.

## ✅ Medidas de Seguridad Implementadas

### 1. Variables de Ambiente Seguras

**✓ Separación Frontend/Backend**
- Variables con `VITE_` → Públicas, expuestas al frontend (seguro)
- Variables sin `VITE_` → Privadas, solo backend (nunca exponer)

**✓ Configuración Limpia**
- Eliminada exposición de API keys en `vite.config.ts`
- Solo variables públicas en tipos TypeScript
- `.env` en `.gitignore` (nunca se sube a Git)

### 2. Variables Públicas (Frontend - Seguro)

Estas variables están expuestas al frontend y **NO son secretas**:

```env
VITE_WHATSAPP_NUMBER=549...      # Número de contacto público
VITE_INSTAGRAM_USERNAME=...      # Usuario público de Instagram
VITE_CONTACT_EMAIL=...            # Email de contacto público
VITE_GOOGLE_ANALYTICS_ID=...     # ID público de Analytics
VITE_META_PIXEL_ID=...            # ID público de Meta Pixel
```

⚠️ **Importante**: Estas variables se incluyen en el JavaScript del frontend y cualquier usuario puede verlas. Solo poné información pública acá.

### 3. Variables Privadas (Backend Only)

Estas variables **NUNCA** deben usarse en el frontend:

```env
# ❌ NUNCA usar en componentes React
GEMINI_API_KEY=...
SHIPPING_API_KEY=...
SHIPPING_API_SECRET=...
DATABASE_URL=...
JWT_SECRET=...
```

Si necesitás usar estas APIs, implementá un backend intermedio.

## 🚫 Problemas de Seguridad Eliminados

### ❌ ANTES (Inseguro)
```typescript
// vite.config.ts
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
// ❌ Exponía API key al frontend!
```

### ✅ AHORA (Seguro)
```typescript
// vite.config.ts
export default defineConfig({
  // Sin exposición de secrets
})

// Las API keys comentadas en .env
// Solo se usan si tenés backend
```

## 📋 Checklist de Seguridad

Antes de hacer deploy, verificá:

- [ ] `.env` está en `.gitignore`
- [ ] No hay API keys hardcodeadas en el código
- [ ] Solo variables `VITE_*` contienen información pública
- [ ] API keys sensibles están comentadas o eliminadas
- [ ] Revisaste que `.env` no se subió a Git por error

## 🔐 Mejores Prácticas

### 1. API Keys y Secrets

**❌ MAL:**
```typescript
// Hardcoded en código
const apiKey = 'sk_live_abc123...';

// Expuesto al frontend
const VITE_SECRET_KEY = 'my_secret';
```

**✅ BIEN:**
```typescript
// Backend only (sin VITE_)
const apiKey = process.env.SHIPPING_API_KEY;

// Frontend solo info pública
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
```

### 2. Validación de Datos

**Siempre validá entrada del usuario:**

```typescript
// ✅ BIEN
const handleInput = (value: string) => {
  const sanitized = value.trim().slice(0, 100);
  // Validar formato, etc.
}
```

### 3. Enlaces Externos

**Siempre usá `rel="noopener noreferrer"` en links externos:**

```typescript
// ✅ BIEN
<a href="https://..." target="_blank" rel="noopener noreferrer">
```

Esto previene ataques de phishing y acceso al objeto `window.opener`.

### 4. WhatsApp y Redes Sociales

**Es seguro exponer:**
- ✅ Número de WhatsApp
- ✅ Usuario de Instagram/Facebook
- ✅ Email de contacto
- ✅ Dirección física

**No es seguro exponer:**
- ❌ Contraseñas
- ❌ API Keys privadas
- ❌ Tokens de autenticación
- ❌ Claves de cifrado

## 🛡️ Defensa en Profundidad

### Actual (Solo Frontend)
```
Usuario → Frontend React → WhatsApp/Instagram
```

### Recomendado para APIs Sensibles
```
Usuario → Frontend React → Backend Node.js → APIs Externas
                               (valida, sanitiza)
```

## ⚠️ Advertencias Importantes

### 1. Google Analytics / Meta Pixel
Los IDs de tracking (GA, Meta Pixel) son **públicos** y está bien que se vean en el frontend. No son secretos.

### 2. WhatsApp API Business
Si en el futuro usás WhatsApp Business API (no el enlace wa.me actual), **necesitarás backend** porque requiere API keys privadas.

### 3. Pagos Online
Si implementás pagos (MercadoPago, Stripe, etc.), **SIEMPRE procesá en backend**. Nunca expongas secret keys al frontend.

## 📞 Reportar Vulnerabilidades

Si encontrás un problema de seguridad:
1. **NO** lo publiques en issues públicos
2. Enviá un email privado al equipo
3. Incluí detalles de la vulnerabilidad
4. Esperá respuesta antes de divulgar

## 📚 Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Vite Security](https://vitejs.dev/guide/env-and-mode.html#env-files)
- [React Security Best Practices](https://react.dev/learn/thinking-in-react)

---

**Última actualización**: Diciembre 2024
**Mantenido por**: Equipo GaLo