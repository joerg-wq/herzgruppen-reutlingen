# Mitwirken

Kurze Anleitung, wie du Inhalte und Daten der Website anpassen kannst.

## Texte ändern

Alle Inhaltsseiten liegen unter **client/src/pages/**:

- `Home.tsx` – Startseite  
- `About.tsx` – Über uns / Herzgruppen verstehen  
- `Locations.tsx` – Standorte & Termine  
- `Join.tsx` – Anmeldung  
- `Organization.tsx` – Verein & Vorstand  
- `FAQ.tsx` – FAQ  
- `Contact.tsx` – Kontakt  
- `Imprint.tsx` – Impressum  
- `Privacy.tsx` – Datenschutzerklärung  

Änderungen an Texten direkt in den jeweiligen TSX-Dateien vornehmen.

## Standorte pflegen

Standorte und Trainingszeiten werden in **client/public/data/locations.json** gepflegt. Jede Gruppe ist ein Objekt mit u. a. `city`, `address`, `weekday`, `time`, `type` (`"herzgruppe"` oder `"herzinsuffizienz"`). Neue Gruppen durch ein weiteres Objekt ergänzen.

## Zentrale Konfiguration

- **Kontakt-E-Mail** und weitere Site-Daten: **client/src/config.ts**  
- **Seitentitel und -beschreibungen (SEO):** **client/src/routes.ts**

## Build und Deployment

Nach Änderungen:

1. Lokal prüfen: `npm run dev` oder `npm run preview`
2. Build: `npm run build`
3. Output für Deployment: Verzeichnis **dist/public** (bei Cloudflare Pages / Netlify als Build-Output konfigurieren)

Siehe auch [README.md](README.md) für **Deployment** (Cloudflare Pages oder Netlify) und weitere Details.
