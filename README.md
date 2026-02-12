## Ambulante Herzsportgruppe Pfullingen – Website (MVP)

Dieses Repository enthält die statische Informations-Website für die ambulante Herzsportgruppe Pfullingen (getragen durch die ARGE Reutlingen e.V.).

Die Anwendung ist ein reines Frontend (React + Vite), ohne Datenbank und ohne Backend.

### Projektstruktur

- **client/** – Frontend (React, Vite, TypeScript)
- **client/public** – Statische Assets, `data/locations.json`, `robots.txt`, `sitemap.xml`
- **_legacy/** – Frühere Backend-/DB-Reste (server, drizzle, shared); werden vom aktuellen statischen Frontend nicht verwendet.

### Entwicklung lokal

Voraussetzungen:

- Node.js (empfohlen: LTS)

Abhängigkeiten installieren:

```bash
npm install --legacy-peer-deps
```

Development-Server starten:

```bash
npm run dev
```

Danach ist die Seite unter `http://localhost:5173` erreichbar.

### Build & Preview (Production)

Production-Build erzeugen:

```bash
npm run build
```

Lokale Vorschau des gebauten Bundles:

```bash
npm run preview
```

Standard-URL: `http://localhost:4173`

### Deployment

Die Anwendung ist ein statischer Vite-Build. Output-Verzeichnis: **dist/public**.

**SPA-Routing:** Für direkte Aufrufe von URLs wie `/impressum` oder `/locations` liefert der Server `index.html` aus (Client-Router übernimmt). Auf **Cloudflare Pages** passiert das automatisch (kein `404.html` im Build). Für **Netlify** liegt `_redirects` in `client/public` (wird mit ins Build übernommen).

#### Option A: Cloudflare Pages (empfohlen)

**Per Git (automatischer Deploy bei Push):**

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → **Create a project** → **Connect to Git**.
2. Repository auswählen (z. B. `herzgruppen-reutlingen`).
3. Build-Einstellungen:
   - **Build command:** `npm run build` (oder `pnpm run build`)
   - **Build output directory:** `dist/public`
   - **Root directory:** leer lassen (Projekt-Root)
4. **Save and Deploy**. Bei jedem Push auf die gewählte Branch wird neu gebaut und ausgerollt.

**Per CLI (manueller Upload):**

1. Projekt einmalig im Dashboard anlegen: Pages → **Create a project** → **Direct Upload** → Projektnamen vergeben (z. B. `herzgruppen-reutlingen`).
2. [Wrangler installieren](https://developers.cloudflare.com/workers/wrangler/install/) und anmelden: `npx wrangler login`.
3. Deploy ausführen:

```bash
pnpm run build
npx wrangler pages deploy dist/public --project-name=herzgruppen-reutlingen
```

Oder ein Aufruf: `pnpm run deploy` (nutzt denselben Projektnamen; ggf. in `package.json` anpassen).

Nach dem ersten Deploy zeigt Cloudflare die URL (z. B. `https://herzgruppen-reutlingen.pages.dev`). Custom Domain optional im Dashboard einrichten.

#### Option B: Netlify

1. [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project** (Git) oder **Deploy manually**.
2. Build-Einstellungen:
   - **Build command:** `npm run build` (oder `pnpm run build`)
   - **Publish directory:** `dist/public`
3. Die Datei `_redirects` (aus `client/public`) ist im Build enthalten und sorgt für SPA-Fallback.

### Inhalte pflegen

- **Textseiten**
  - Alle Seiten liegen unter `client/src/pages/…`:
    - `Home.tsx` – Startseite
    - `About.tsx` – „Herzsport in Pfullingen verstehen“
    - `Locations.tsx` – Übungstermine & Ort in Pfullingen
    - `Join.tsx` – Teilnahme & Anmeldung (Formular mit E-Mail-Weiterleitung)
    - `FAQ.tsx` – Häufig gestellte Fragen
    - `Contact.tsx` – Kontakt
    - `Imprint.tsx` – Impressum
    - `Privacy.tsx` – Datenschutzerklärung

- **Übungstermine Pfullingen**
  - Datei: `client/public/data/locations.json`
  - Für diese Instanz werden nur Einträge mit `city = "Pfullingen"` verwendet.

Nach Änderungen an Texten oder Standorten:

1. Lokal prüfen (`npm run dev` oder `npm run preview`)
2. Neu builden (`npm run build`)
3. Deployment aktualisieren

### SEO

- **Sprache:** `lang="de"` in `client/index.html`
- **Meta-Tags:** Pro Seite werden Titel und Description aus `client/src/routes.ts` gesetzt (bei Routenwechsel per `document.title` und `<meta name="description">`).
- **Sitemap & robots:** `client/public/sitemap.xml` und `client/public/robots.txt` sind vorhanden.
- **Go-Live:** Bei Deployment die **Basis-URL** in `sitemap.xml` und in `robots.txt` (Sitemap-Zeile) auf die finale Domain der Herzsportgruppe Pfullingen umstellen (z. B. `https://www.herzsportgruppe-pfullingen.de`). Optional kann in `client/src/config.ts` eine feste `BASE_URL` für Links genutzt werden.

### Historie

Die Inhalte orientieren sich an der bestehenden Seite `http://herzsportgruppe-pfullingen.de/`. Diese bleibt (sofern weiter betrieben) als ergänzende Quelle für Rückblicke und Bilder bestehen, während diese Anwendung den kompakten, modernen Auftritt der Herzsportgruppe Pfullingen bildet.

### Security

- Es werden **keine sensiblen Daten oder API-Keys** im Frontend abgelegt.
- Externe Links (z. B. Google Maps, ODR, bfdi.bund.de) sind mit `rel="noopener noreferrer"` gesetzt.
- **HTTPS** sollte am Hoster erzwungen werden (Redirect von HTTP auf HTTPS).
- Optional kann eine **Content-Security-Policy (CSP)** beim Hoster gesetzt werden, z. B. für Cloudflare Pages oder Netlify. Beispiel (nur erlaubte Script-/Style-Quellen):

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self';
```

Konkrete Umsetzung je nach Hoster (z. B. `_headers` bei Netlify oder Cloudflare Dashboard).

### Rechtliches

Impressum und Datenschutzerklärung inhaltlich von fachkundiger Stelle (z. B. Anwalt) prüfen lassen.
