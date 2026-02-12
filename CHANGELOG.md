# Changelog

## [Unreleased]

---

## [1.2.1] – 2026-02-12 – Rehasport-Text & Kontakte

### Geändert (1.2.1)

- **Hero-Text:** Startseitentext im Hero auf fachlich korrekten Rehasport-Begriff angepasst („Rehasport in Herzgruppen – ärztlich begleitet und wohnortnah im Kreis Reutlingen.“) und primären Button in „Standort & Termine finden“ umbenannt.
- **Standorte:** Adressen der Herzgruppen präzisiert (inkl. Straßen, Hausnummern, PLZ/Ort) und mit konkreten Google-Maps-Links hinterlegt.
- **Kontakte:** Sämtliche E-Mail-Adressen und Telefonnummern auf der Seite als klickbare `mailto:`- bzw. `tel:`-Links umgesetzt.
- **Anmeldung:** Upload-Feld im Anmeldeformular entfernt, sodass die Anmeldung klar als reine E-Mail-Anfrage ohne Dateiupload über die Website erfolgt.

---

## [1.2.0] – 2026-02-12 – ARGE-Rebranding

### Geändert (1.2.0)

- **ARGE-Rebranding:** Website von „Herzsportgruppe Pfullingen“ auf „Herzgruppen im Kreis Reutlingen“ (ARGE Reutlingen e.V.) umgestellt – inkl. Header, Footer, Seiten-Texte und Menüstruktur.
- **Mehrere Standorte:** `Locations.tsx` zeigt nun alle Herzgruppen im Kreis Reutlingen (Filter nach Ort, Wochentag, Herzinsuffizienz-Gruppen), `Join.tsx` erlaubt die Auswahl verschiedener Ortsgruppen.
- **Rechtliches:** Impressum und Datenschutzerklärung an das offizielle Impressum/Datenschutz von herzgruppen.de angelehnt und konsolidiert.
- **Deployment:** Cloudflare-Pages-Projekt für ARGE-Variante (`herzgruppen-reutlingen`) eingerichtet und in `package.json`/README dokumentiert.

---

## [1.1.0] – 2026-02-11 – Layout & UX

### Geändert

- **Kompakteres Layout:** Weniger Abstände (Hero, Sektionen, Cards), kleinere Überschriften und Fließtexte auf allen Seiten (Home, About, Contact, Locations, Impressum, Datenschutz, FAQ). Footer und Header schlanker.
- **Standorte:** Adresse immer als Text sichtbar; Google-Maps-Link als optionaler kleiner Link darunter (bei nicht funktionierendem Link bleibt Adresse nutzbar).
- **Design:** Fokus-Ringe für Tastatur-Navigation (`focus-visible`), einheitliche Hierarchie und Lesbarkeit. FAQ: CTA per SPA-Link.

---

## [1.0.0]

### Hinzugefügt (1.0.0)

- SEO: Meta-Tags pro Seite, zentrales Route-Mapping (`routes.ts`), Sitemap und robots.txt
- Zentrale Konfiguration: `client/src/config.ts` (Kontakt-E-Mail, Seitentitel, Basis-URL)
- Dokumentation: README um SEO, Security, Rechtliches und Projektstruktur erweitert; CONTRIBUTING.md

### Geändert (1.0.0)

- `client/index.html`: Sprache auf `lang="de"`, Default-Meta-Description, Analytics-Script entfernt
- Alle Kontakt-E-Mail-Referenzen nutzen nun `CONTACT_EMAIL` aus der Config

### Verschoben (1.0.0)

- Frühere Backend-/DB-Reste nach `_legacy/` (server, drizzle, shared, drizzle.config.ts)
- Vitest-Konfiguration verweist auf `_legacy/server/**` für Tests

- Statische Informations-Website für Herzgruppen Reutlingen (ARGE Reutlingen e.V.)
- React + Vite, Standorte aus JSON, Anmeldung per E-Mail-Weiterleitung
