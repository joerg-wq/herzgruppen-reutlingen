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
    title: `Was ist eine ambulante Herzgruppe? | ${SITE_NAME}`,
    description:
      "Ärztlich betreute Rehasport-Gruppe wohnortnah im Kreis Reutlingen – Ziele, Ablauf und Sicherheit des Trainings.",
  },
  {
    path: "/locations",
    title: `Standorte & Übungstermine | ${SITE_NAME}`,
    description:
      "Alle Standorte und Übungstermine der Herzgruppen im Kreis Reutlingen – von Reutlingen über Pfullingen bis Bad Urach und Münsingen.",
  },
  {
    path: "/join",
    title: `Teilnahme & Voraussetzungen | ${SITE_NAME}`,
    description:
      "Informationen zu ärztlicher Verordnung, Genehmigung durch die Krankenkasse und Einstieg in die Herzgruppen im Kreis Reutlingen.",
  },
  {
    path: "/organization",
    title: `ARGE Reutlingen & Ortsgruppen | ${SITE_NAME}`,
    description:
      "Die ARGE Reutlingen e.V., ihr Vorstand und die Ortsgruppen mit ihren Patientenräten im Kreis Reutlingen.",
  },
  {
    path: "/faq",
    title: `FAQ | ${SITE_NAME}`,
    description:
      "Antworten auf häufige Fragen zu Voraussetzungen, Kostenübernahme, Training und Sicherheit in den Herzgruppen.",
  },
  {
    path: "/contact",
    title: `Kontakt | ${SITE_NAME}`,
    description:
      "Kontakt zur Geschäftsstelle der ARGE Reutlingen – Adresse, Telefon und E-Mail.",
  },
  {
    path: "/impressum",
    title: `Impressum | ${SITE_NAME}`,
    description:
      "Impressum der ARGE Reutlingen – Arbeitsgemeinschaft für ambulante Herzgruppen im Kreis Reutlingen e.V.",
  },
  {
    path: "/datenschutz",
    title: `Datenschutz | ${SITE_NAME}`,
    description:
      "Datenschutzerklärung für die Online-Angebote der Herzgruppen im Kreis Reutlingen.",
  },
  {
    path: "/barrierefreiheit",
    title: `Barrierefreiheit | ${SITE_NAME}`,
    description:
      "Erklärung zur digitalen Barrierefreiheit der Website der Herzgruppen im Kreis Reutlingen.",
  },
];

export function getMetaForPath(pathname: string): RouteMeta | undefined {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return ROUTE_META.find((r) => (r.path === "/" ? pathname === "/" : normalized === r.path));
}
