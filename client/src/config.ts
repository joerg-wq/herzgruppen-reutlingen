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

/** Standort-spezifische E-Mail-Adressen für Kontaktformular. */
export const LOCATION_EMAILS: Record<string, string> = {
  "Bad Urach": "margret.traub@googlemail.com",
  "Pfullingen": "Hartmut.fach@gmx.de",
  "Neckar-Schönbuch": "Hartmut.fach@gmx.de",
  "Reutlingen": "Hartmut.fach@gmx.de",
  "Dettingen": "stefhartwich@gmx.de",
  "Dettingen/E.": "stefhartwich@gmx.de",
  "Münsingen": "Renate.Geiselhart@web.de",
  "Metzingen": "brigittefritz.9999@web.de",
};

/** Basis-URL der Live-Seite (Cloudflare Pages). */
export const BASE_URL = "https://herzgruppen-reutlingen.pages.dev";
