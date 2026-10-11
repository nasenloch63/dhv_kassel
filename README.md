# DHV Kassel Demo

Nicht offizielle, responsive Demowebsite. Eine Ortsgruppe Kassel ist anhand der offiziellen DHV-Liste am 10.10.2026 nicht bestaetigt. Keine Zugangsdaten erforderlich.

## Vercel

Produktionsadresse: https://dhv-kassel-demo.vercel.app

Vercel-Projekt `dhv-kassel-demo` im Team `Naser Solutions`, verbunden mit `nasenloch63/dhv_kassel`. Der Produktionszweig ist `main`. Die Demo bleibt mit `noindex` gekennzeichnet. Der Zugang richtet sich nach den Deployment-Protection-Einstellungen des Vercel-Projekts.

## Lokal starten

Node.js 20.9 oder neuer und pnpm verwenden:

```sh
pnpm install
pnpm dev
```

## Inhalte pflegen

`src/data/content.ts` enthaelt typisierte `Post`, `Event` und `Source` Modelle und alle Inhalte. Blogbeitraege unter `posts`, Veranstaltungen unter `events` ergaenzen. Eindeutige IDs und Slugs vergeben. Die Funktionen `getPosts` und `getEvents` dienen als spaetere CMS-Anbindungspunkte.

- `status: "demo"` kennzeichnet Beispiele; `verified` braucht eine nachvollziehbare offizielle Quelle. `reported` kennzeichnet vom Auftraggeber mitgeteilte lokale Rueckblicke mit `reportLabel`; `planned` beschreibt noch nicht terminierte reale Planungen, keine Beispielveranstaltungen.
- Blogdatum: ISO-Datum `YYYY-MM-DD`; fuer Demo-Beitraege als Beispieldatum ausgewiesen.
- Veranstaltung: `startsAt` / `endsAt` als ISO-Zeitstempel mit Zeitzonenoffset; bis zur Bestaetigung `null`. `dateLabel`, `timeLabel` und `location` muessen zu den bestaetigten Daten passen.
- `phase` trennt kommende und vergangene Eintraege. Bei echten Veranstaltungen redaktionell aktualisieren oder vor der CMS-Anbindung zeitbasiert ableiten.
- `body` besteht aus strukturierten Abschnitten mit optionaler Ueberschrift und Text. Kein HTML aus einem CMS ungeprueft einsetzen.
- Ist nur das Veranstaltungsdatum bekannt, `date: "YYYY-MM-DD"` setzen und `startsAt` auf `null` lassen. Keine Uhrzeit erfinden.
- Originalbilder stehen unter `public/images/dhv/`, das bereitgestellte Crew-Logo unter `public/images/living-soil/`. `image` und `gallery` verwenden `MediaAsset` mit Alttext, Bildunterschrift, Quelle und Abmessungen.
- Der Rueckblick `rueckblick-haze-chill-living-soil-crew` und die Veranstaltung vom 09.10.2026 basieren auf Angaben des Auftraggebers. Die Adresse wurde auf der Cafe-Website geprueft. Messergebnisse, genaue Betraege und Namen wurden nicht ergaenzt.
- Der Rueckblick verwendet ausgewaehlte Veranstaltungsfotos unter `public/images/events/haze-chill-2026-10-09/` und kurze MP4-Videos unter `public/videos/events/`. Originalmedien bleiben im bereitgestellten Ordner erhalten. `galleryTitle`, `socialLinks` und `videos` ergaenzen die redaktionellen Inhalte.
- Das wiederkehrende Format `haze-chill-wiederkehrendes-treffen` hat bewusst kein Datum und keine Anmeldung. Folgetermin, Turnus, Testangebot und Teilnahmebedingungen vor der Ankuendigung bestaetigen.
- Das neue `offenes-gruendungstreffen-15-oktober-2026` verwendet `status: "announced"`: Termin und Beginn laut bereitgestelltem Flyer, keine unabhaengige Bestaetigung durch Facebook oder den Bundesverband. `flyer` zeigt das Originalmotiv vollstaendig; `announcementUrl` verlinkt das mitgeteilte Facebook-Profil, keine erfundene Facebook-Event-URL.
- Die prominenten Facebook-Buttons nutzen zentral `site.facebookUrl`. Es gibt keine Facebook-Einbettung, Tracking-Skripte oder Anmeldung innerhalb dieser Website.

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

## Schriftarten

Dosis fuer Ueberschriften, Navigation und Buttons; DejaVu Condensed fuer Fliesstext, wie am 11.10.2026 auf hanfverband.de geprueft. Die Original-Schriftdateien liegen unter `public/fonts/`, die Zuordnung in `src/app/fonts.css` und `globals.css`. Keine externen Schriftanfragen. Lizenztexte fuer Dosis (SIL OFL) und DejaVu liegen bei den Schriftdateien und sind auf der Quellenseite verlinkt.
