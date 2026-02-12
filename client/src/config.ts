/**
 * Zentrale Redaktions- und Site-Konfiguration.
 * Kontakt, Seitentitel und Basis-URL an einer Stelle pflegen.
 *
 * Diese Instanz bildet ausschließlich die ambulante Herzsportgruppe
 * Pfullingen ab.
 */

export const SITE_NAME = "Ambulante Herzsportgruppe Pfullingen";
export const SITE_DESCRIPTION =
  "Ambulante Herzsportgruppe Pfullingen – Rehasport, Gemeinschaft und Lebensfreude für Herzpatienten mit und ohne Herzinsuffizienz.";

// Zentrale Kontaktadresse der Herzsportgruppe Pfullingen
export const CONTACT_EMAIL = "herzgruppe-pfullingen@magenta.de";

/** Basis-URL der Live-Seite; bei Deployment anpassen (z.B. für Sitemap). */
export const BASE_URL =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://www.example.com";
