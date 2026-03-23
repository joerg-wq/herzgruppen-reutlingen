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
export const CONTACT_EMAIL = "info@herzsport-reutlingen.org";

/** Standort-spezifische E-Mail-Adressen für Kontaktformular. */
export const LOCATION_EMAILS: Record<string, string> = {
  "Bad Urach": "badurach@herzsport-reutlingen.org",
  "Pfullingen": "pfullingen@herzsport-reutlingen.org",
  "Neckar-Schönbuch": "neckar-schoenbuch@herzsport-reutlingen.org",
  "Reutlingen": "reutlingen@herzsport-reutlingen.org",
  "Dettingen": "dettingen@herzsport-reutlingen.org",
  "Dettingen/E.": "dettingen@herzsport-reutlingen.org",
  "Münsingen": "muensingen@herzsport-reutlingen.org",
  "Metzingen": "metzingen@herzsport-reutlingen.org",
};

/** Fallback, wenn `VITE_SITE_URL` nicht gesetzt ist (siehe `.env.example`). */
const DEFAULT_BASE_URL = "https://herzsport-reutlingen.org";

function normalizeSiteUrl(raw: string | undefined): string {
  const t = raw?.trim();
  if (!t) return DEFAULT_BASE_URL;
  return t.replace(/\/+$/, "");
}

/**
 * Öffentliche Basis-URL (canonical, Open Graph). Optional per Build-Env:
 * `VITE_SITE_URL=https://ihre-domain.de` in `.env.production` o. ä.
 */
export const BASE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);

/**
 * Muss zum tatsächlichen Hosting passen (Datenschutz „Server-Logdaten“).
 * Nach Umzug zu ALL-INKL auf `"allinkl"` stellen.
 */
export type HostingDisclosure = "cloudflare_pages" | "allinkl";
export const HOSTING_DISCLOSURE: HostingDisclosure = "allinkl";
