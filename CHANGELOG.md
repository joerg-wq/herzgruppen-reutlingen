# Changelog

## [Unreleased]

### Hinzugefügt

- SEO: Meta-Tags pro Seite, zentrales Route-Mapping (`routes.ts`), Sitemap und robots.txt
- Zentrale Konfiguration: `client/src/config.ts` (Kontakt-E-Mail, Seitentitel, Basis-URL)
- Dokumentation: README um SEO, Security, Rechtliches und Projektstruktur erweitert; CONTRIBUTING.md

### Geändert

- `client/index.html`: Sprache auf `lang="de"`, Default-Meta-Description, Analytics-Script entfernt
- Alle Kontakt-E-Mail-Referenzen nutzen nun `CONTACT_EMAIL` aus der Config

### Verschoben

- Frühere Backend-/DB-Reste nach `_legacy/` (server, drizzle, shared, drizzle.config.ts)
- Vitest-Konfiguration verweist auf `_legacy/server/**` für Tests

---

## MVP Launch

- Statische Informations-Website für Herzgruppen Reutlingen (ARGE Reutlingen e.V.)
- React + Vite, Standorte aus JSON, Anmeldung per E-Mail-Weiterleitung
