import { SITE_NAME, SITE_DESCRIPTION } from "./config";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

/** Zentrale Route-Metadaten für SEO und Social Sharing. */
export const ROUTE_META: RouteMeta[] = [
  { path: "/", title: `${SITE_NAME} | Startseite`, description: SITE_DESCRIPTION },
  { path: "/about", title: `Über uns | ${SITE_NAME}`, description: "Informationen zu den ambulanten Herzgruppen im Kreis Reutlingen und unserem Angebot." },
  { path: "/locations", title: `Standorte & Termine | ${SITE_NAME}`, description: "Alle Standorte und Trainingszeiten der Herzgruppen im Kreis Reutlingen." },
  { path: "/join", title: `Anmeldung | ${SITE_NAME}`, description: "So melden Sie sich für eine Herzgruppe an – Formular und Kontakt." },
  { path: "/organization", title: `Verein & Vorstand | ${SITE_NAME}`, description: "Über die ARGE Reutlingen e.V., Vorstand und Qualitätssicherung." },
  { path: "/faq", title: `FAQ | ${SITE_NAME}`, description: "Häufige Fragen zu Herzgruppen, Anmeldung und Training." },
  { path: "/contact", title: `Kontakt | ${SITE_NAME}`, description: "Kontakt zur Geschäftsstelle – Adresse, Telefon und E-Mail." },
  { path: "/impressum", title: `Impressum | ${SITE_NAME}`, description: "Impressum und Angaben gemäß § 5 TMG." },
  { path: "/datenschutz", title: `Datenschutz | ${SITE_NAME}`, description: "Datenschutzerklärung der ARGE Reutlingen e.V." },
];

export function getMetaForPath(pathname: string): RouteMeta | undefined {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return ROUTE_META.find((r) => (r.path === "/" ? pathname === "/" : normalized === r.path));
}
