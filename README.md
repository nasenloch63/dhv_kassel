# DHV Kassel Demo

Nicht offizielle, responsive Demowebsite. Eine Ortsgruppe Kassel ist anhand der offiziellen DHV-Liste am 10.10.2026 nicht bestaetigt. Keine Zugangsdaten erforderlich.

## Lokal starten

Node.js 20.9 oder neuer und pnpm verwenden:

```sh
pnpm install
pnpm dev
```

## Inhalte pflegen

`src/data/content.ts` enthaelt typisierte `Post`, `Event` und `Source` Modelle und alle Inhalte. Blogbeitraege unter `posts`, Veranstaltungen unter `events` ergaenzen. Eindeutige IDs und Slugs vergeben. Die Funktionen `getPosts` und `getEvents` dienen als spaetere CMS-Anbindungspunkte.

- `status: "demo"` kennzeichnet Beispiele, `verified` braucht eine nachvollziehbare Quelle.
- Blogdatum: ISO-Datum `YYYY-MM-DD`; fuer Demo-Beitraege als Beispieldatum ausgewiesen.
- Veranstaltung: `startsAt` / `endsAt` als ISO-Zeitstempel mit Zeitzonenoffset; bis zur Bestaetigung `null`. `dateLabel`, `timeLabel` und `location` muessen zu den bestaetigten Daten passen.
- `phase` trennt kommende und vergangene Eintraege. Bei echten Veranstaltungen redaktionell aktualisieren oder vor der CMS-Anbindung zeitbasiert ableiten.
- `body` besteht aus strukturierten Abschnitten mit optionaler Ueberschrift und Text. Kein HTML aus einem CMS ungeprueft einsetzen.

## Pruefen und exportieren

```sh
pnpm typecheck
pnpm build
pnpm start
```

Next.js App Router, React, Tailwind CSS 4 und Lucide. Der Build erzeugt `out/` fuer statisches Hosting. Neue oder geaenderte Inhalte erfordern einen erneuten Build. Kein Backend, kein Datenversand, kein Formular oder Anmeldesystem. Bilder und Schriften laden ohne Drittanbieteranfrage. Quellen und Bildlizenz stehen auf `/quellen/`.

## Vor einer oeffentlichen Veroeffentlichung

- Anerkennung und Bezeichnung einer Kasseler Ortsgruppe mit dem DHV klaeren; Markennutzung und Inhalte freigeben lassen.
- Lokale Ansprechpartner, Betreiberkontakt, echte Taetigkeiten und Termine verifizieren und Demo-Inhalte ersetzen.
- Impressum und Datenschutzerklaerung fuer den Betreiber und das tatsaechliche Hosting vervollstaendigen.
- Falls benoetigt, Formular, Newsletter und Anmeldung mit Backend, Datenschutz und Rueckmeldungen implementieren.
- Domain und `site.origin` aktualisieren; erst nach Freigabe `robots` und Metadaten auf Indexierung umstellen.
- Quellen erneut pruefen, Bildnachweis erhalten und Barrierefreiheit redaktionell mitpruefen.

Die Demo ist absichtlich `noindex` und blockiert Suchmaschinen ueber `robots.txt`.
