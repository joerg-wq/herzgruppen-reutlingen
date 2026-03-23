/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Kanonische Site-URL ohne trailing slash (OG-Tags, canonical). Leer = Fallback in config.ts */
  readonly VITE_SITE_URL?: string;
}
