/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Public environment variables (safe to expose in frontend)
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_INSTAGRAM_USERNAME: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_TIKTOK_URL: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_META_PIXEL_ID: string

  // NOTE: Never add sensitive API keys here!
  // API keys should only be used in backend/server code
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}