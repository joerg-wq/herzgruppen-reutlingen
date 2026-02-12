import { SITE_NAME, SITE_DESCRIPTION } from "./config";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

/** Zentrale Route-Metadaten für SEO und Social Sharing. */
export const ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    title: `${SITE_NAME} | Startseite`,
    description: SITE_DESCRIPTION,
  },
  {
    path: "/about",
    title: `Herzsport verstehen | ${SITE_NAME}`,
    description:
      "Wie Herzsport in Pfullingen abläuft, welche Ziele das Training hat und wie wir Sicherheit gewährleisten.",
  },
  {
    path: "/locations",
    title: `Übungstermine & Ort | ${SITE_NAME}`,
    description:
      "Übungstermine der Herzsportgruppe Pfullingen in der Sporthalle des Friedrich-Schiller-Gymnasiums.",
  },
  {
    path: "/join",
    title: `Anmeldung | ${SITE_NAME}`,
    description:
      "So melden Sie sich für die Herzsportgruppe Pfullingen an – ärztliche Verordnung, Ablauf und Kontakt.",
  },
  {
    path: "/organization",
    title: `Verein & Struktur | ${SITE_NAME}`,
    description:
      "Informationen zum Trägerverein und zur organisatorischen Struktur der Herzsportgruppe Pfullingen.",
  },
  {
    path: "/faq",
    title: `FAQ | ${SITE_NAME}`,
    description:
      "Antworten auf häufige Fragen zur Teilnahme an der Herzsportgruppe Pfullingen.",
  },
  {
    path: "/contact",
    title: `Kontakt | ${SITE_NAME}`,
    description:
      "Kontakt zur Herzsportgruppe Pfullingen – Adresse, Telefon und E-Mail.",
  },
  {
    path: "/impressum",
    title: `Impressum | ${SITE_NAME}`,
    description:
      "Impressum der ambulanten Herzsportgruppe Pfullingen und der ARGE Reutlingen e.V.",
  },
  {
    path: "/datenschutz",
    title: `Datenschutz | ${SITE_NAME}`,
    description:
      "Datenschutzerklärung für die Angebote der Herzsportgruppe Pfullingen.",
  },
];

export function getMetaForPath(pathname: string): RouteMeta | undefined {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return ROUTE_META.find((r) => (r.path === "/" ? pathname === "/" : normalized === r.path));
}
