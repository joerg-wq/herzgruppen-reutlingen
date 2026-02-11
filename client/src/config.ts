/**
 * Zentrale Redaktions- und Site-Konfiguration.
 * Kontakt, Seitentitel und Basis-URL an einer Stelle pflegen.
 */

export const SITE_NAME = "Herzgruppen Reutlingen";
export const SITE_DESCRIPTION =
  "Ambulante Herzgruppen im Kreis Reutlingen – Bewegung, Gemeinschaft und Sicherheit unter ärztlicher Aufsicht.";
export const CONTACT_EMAIL = "arge-herzsport@web.de";
/** Basis-URL der Live-Seite; bei Deployment anpassen (z.B. für Sitemap). */
export const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://www.example.com";
