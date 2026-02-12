/**
 * Zentrale Redaktions- und Site-Konfiguration.
 * Kontakt, Seitentitel und Basis-URL an einer Stelle pflegen.
 *
 * Diese Instanz bildet die ARGE Reutlingen – ambulante Herzgruppen
 * im Kreis Reutlingen e.V. ab.
 */

export const SITE_NAME = "Herzgruppen im Kreis Reutlingen";
export const SITE_DESCRIPTION =
  "Ambulante Herzgruppen im Kreis Reutlingen – Rehasport, Gemeinschaft und Lebensqualität unter ärztlicher Betreuung.";

// Zentrale Kontaktadresse der ARGE Reutlingen (Geschäftsstelle)
export const CONTACT_EMAIL = "arge-herzsport@web.de";

/** Basis-URL der Live-Seite; für Links/Sitemaps wird herzgruppen.de verwendet. */
export const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://herzgruppen.de";
