export type ContentStatus = "verified" | "announced" | "reported" | "planned" | "demo";
export type Category = "Ortsgruppe" | "Aktionen" | "News";
export interface Source { label: string; url: string; checkedAt: string }
export interface Paragraph { heading?: string; text: string }
export interface MediaAsset {
  src: string; alt: string; caption: string; credit: string;
  width: number; height: number; fit?: "cover" | "contain";
}
export interface Post {
  id: string; slug: string; title: string; date: string; category: Category;
  teaser: string; status: ContentStatus; visual: "kassel" | "news" | "action" | "event";
  readingMinutes: number; body: Paragraph[]; source?: Source;
  image?: MediaAsset; gallery?: MediaAsset[]; reportLabel?: string;
  eventDate?: string; relatedEventSlug?: string;
  pendingEventPhotos?: number;
}
export interface Event {
  id: string; slug: string; title: string; status: ContentStatus;
  phase: "upcoming" | "past"; startsAt: string | null; endsAt: string | null;
  dateLabel: string; timeLabel: string; location: string; type: string;
  description: string; body: Paragraph[]; source?: Source;
  date?: string; reportLabel?: string; relatedPostSlug?: string;
  flyer?: MediaAsset; announcementUrl?: string;
}
export const site = {
  name: "DHV-Ortsgruppe Kassel", origin: "https://dhv-kassel-demo.vercel.app",
  researchDate: "10.10.2026", contactUrl: "https://hanfverband.de/kontakt",
  groupsUrl: "https://hanfverband.de/aktiv-vor-ort", datesUrl: "https://hanfverband.de/termine",
  facebookUrl: "https://www.facebook.com/profile.php?id=61593238476360",
  localStatus: "Für Kassel wurde bei der Recherche am 10.10.2026 kein Eintrag in der offiziellen DHV-Ortsgruppenliste gefunden. Der offizielle Ortsgruppenstatus und lokale Ansprechpartner sind weiterhin nicht unabhängig bestätigt. Der Rückblick auf den 9. Oktober basiert auf Angaben für diese Website.",
};
export const dhvMedia = {
  logo: {
    src: "/images/dhv/logo.png", alt: "Original-Logo des Deutschen Hanfverbands",
    caption: "Deutscher Hanfverband", credit: "Deutscher Hanfverband · hanfverband.de",
    width: 1650, height: 500, fit: "contain" as const,
  },
  bundestag: {
    src: "/images/dhv/bundestag.jpg", alt: "DHV-Beitragsgrafik mit Georg Wurth vor dem Bundestag",
    caption: "Original-Beitragsgrafik des DHV zur Anhörung im Bundestag.",
    credit: "Quelle: Deutscher Hanfverband · Grafik unverändert übernommen",
    width: 1280, height: 720, fit: "contain" as const,
  },
  newsLogo: {
    src: "/images/dhv/original-news-logo.png", alt: "Original-Beitragsgrafik mit dem Logo des Deutschen Hanfverbands",
    caption: "Originalgrafik des Deutschen Hanfverbands.", credit: "Quelle: Deutscher Hanfverband",
    width: 1920, height: 1080, fit: "contain" as const,
  },
  videoNews: {
    src: "/images/dhv/news-525.jpg", alt: "Original-Vorschaubild: Anhörung zu GKV & Cannabis, DHV-News 525",
    caption: "DHV-News #525 · 9. Oktober 2026", credit: "Original-Vorschaubild: Deutscher Hanfverband",
    width: 391, height: 220, fit: "contain" as const,
    url: "https://hanfverband.de/anhoerung-zu-gkv-cannabis-dhv-news-525",
  },
};
export const crewMedia: MediaAsset[] = [
  {
    src: "/images/living-soil/logo.webp", alt: "Original-Logo der Living Soil Crew in Grün und Gold",
    caption: "Living Soil Crew · bereitgestelltes Markenlogo, kein Foto vom Treffen.",
    credit: "Living Soil Crew · Medienpaket für diese Website", width: 1200, height: 1200, fit: "contain",
  },
];
export const posts: Post[] = [
  {
    id: "post-haze-chill", slug: "rueckblick-haze-chill-living-soil-crew",
    title: "Ein Abend, der verbindet: Treffen im Haze & Chill",
    date: "2026-10-10", eventDate: "2026-10-09", category: "Ortsgruppe",
    status: "reported", visual: "event", readingMinutes: 2,
    relatedEventSlug: "treffen-haze-chill-9-oktober-2026", gallery: crewMedia, pendingEventPhotos: 3,
    reportLabel: "Angaben für diese Website vom 10. Oktober 2026. Datum, Beteiligung und Eindrücke wurden für den lokalen Rückblick mitgeteilt; dies ist keine offizielle Erklärung des DHV.",
    teaser: "Ein gut besuchter Abend mit DHV und Living Soil Crew: Cannabis-Tests, drei Platzierungen und viel gute Stimmung im Haze & Chill.",
    body: [
      { heading: "Zusammenkommen in Kassel", text: "Am 9. Oktober 2026 fand unsere Veranstaltung im Haze & Chill Café in der Kölnischen Straße 12–14 in Kassel statt. Der Abend war gut besucht, und wir hatten gemeinsam eine schöne Zeit. Mit dabei waren der Deutsche Hanfverband und die Living Soil Crew." },
      { heading: "Gute Stimmung, gemeinsamer Austausch", text: "Was uns von diesem Abend bleibt, ist vor allem die Freude am Zusammenkommen. Es hat Spaß gemacht, sich vor Ort zu begegnen und diesen Abend gemeinsam zu verbringen. Genau solche Treffen geben lokalem Engagement ein Gesicht." },
      { heading: "Eigenes Cannabis testen lassen", text: "Die Living Soil Crew hatte ein Testgerät mitgebracht. Für einen kleinen Betrag konnten die Gäste ihr eigenes Cannabis testen lassen. So gehörten neben dem gemeinsamen Austausch auch die Messungen zum Abend. Ein genauer Betrag und einzelne Messergebnisse sind für diesen Rückblick nicht angegeben." },
      { heading: "Ein Preis und drei Platzierungen", text: "Der höchste gemessene Wert wurde mit einem Preis ausgezeichnet. Außerdem gab es einen zweiten und einen dritten Platz. Die Namen der Platzierten, die Messwerte und der konkrete Preis werden hier nicht ergänzt, solange diese Angaben noch nicht vorliegen." },
      { heading: "Mit dem DHV und der Living Soil Crew", text: "Wir freuen uns, dass der Deutsche Hanfverband und die Living Soil Crew dabei waren. Danke an alle, die gekommen sind und den Abend mit uns verbracht haben – und an das Haze & Chill für den Ort unseres Treffens." },
      { heading: "Das Treffen soll wiederkommen", text: "Der Abend ist als Auftakt für ein wiederkehrendes Format gedacht. Wir freuen uns darauf, wieder gemeinsam im Haze & Chill zusammenzukommen. Der nächste Termin und die Teilnahmebedingungen stehen noch nicht fest. Sobald diese Angaben bestätigt sind, ergänzen wir sie auf der Veranstaltungsseite." },
    ],
  },
  {
    id: "post-1", slug: "gemeinsam-in-kassel", title: "Veränderung beginnt vor der eigenen Haustür.",
    date: "2026-10-08", category: "Ortsgruppe", status: "demo", visual: "kassel", readingMinutes: 3,
    teaser: "Zuhören, ins Gespräch kommen und gemeinsam etwas bewegen: So könnte Engagement in Kassel aussehen.",
    body: [
      { heading: "Eine Idee für Kassel", text: "Dieser Beispielbeitrag beschreibt, wie eine lokale Initiative Menschen zusammenbringen könnte. Er dokumentiert keine tatsächliche Arbeit einer Kasseler DHV-Ortsgruppe und ist keine Aussage des DHV." },
      { heading: "Kleine Schritte, gemeinsame Themen", text: "Ein möglicher Anfang wäre ein offener Austausch: Welche Fragen beschäftigen Menschen vor Ort? Wo fehlen sachliche Informationen? Aus solchen Gesprächen könnten Ideen für Informationsangebote oder gemeinsame Aktionen entstehen." },
      { heading: "Raum für unterschiedliche Perspektiven", text: "Engagement kann viele Formen haben: Texte schreiben, Veranstaltungen vorbereiten, gestalten oder einfach zuhören. Diese Demo zeigt, wie eine künftige lokale Website solche Möglichkeiten sichtbar machen könnte." },
    ],
  },
  {
    id: "post-2", slug: "dhv-im-bundestag", title: "Im Bundestag: der DHV zur GKV-Anhörung",
    date: "2026-10-09", category: "News", status: "verified", visual: "news", readingMinutes: 1, image: dhvMedia.bundestag,
    teaser: "Der Bundesverband veröffentlicht einen Videoausschnitt mit Georg Wurth aus der Anhörung vom 7. Oktober.",
    source: { label: "Deutscher Hanfverband, 09.10.2026", url: "https://hanfverband.de/georg-wurth-im-bundestag-anhoerung-zu-aenderungen-des-gkv-bstabg", checkedAt: "2026-10-10" },
    body: [
      { text: "Der DHV hat am 9. Oktober 2026 einen Videoausschnitt von Georg Wurths Antwort bei der Anhörung im Gesundheitsausschuss am 7. Oktober veröffentlicht. Thema waren Folgeregelungen zum GKV-Beitragssatzstabilisierungsgesetz." },
      { heading: "Direkt zur Quelle", text: "Der Originalbeitrag enthält den Videoausschnitt sowie Links zur schriftlichen Stellungnahme und zum vollständigen Mitschnitt des Bundestages. Dies ist eine bundesweite Nachricht, keine lokale Aktivität in Kassel." },
    ],
  },
  {
    id: "post-3", slug: "ideen-fuer-einen-infostand", title: "Gute Gespräche brauchen einen guten Anfang.",
    date: "2026-10-05", category: "Aktionen", status: "demo", visual: "action", readingMinutes: 2,
    teaser: "Eine Ideensammlung für einen Infostand: verständliche Materialien, offene Fragen und Platz für Austausch.",
    body: [
      { heading: "Eine Aktion als Beispiel", text: "Ein Infostand könnte Gelegenheit bieten, Fragen zu sammeln und auf seriöse Quellen hinzuweisen. Dieser Text ist ein Demo-Inhalt. Ein solcher Stand wurde für Kassel weder recherchiert noch angekündigt." },
      { heading: "Vorbereitung macht den Unterschied", text: "Eine mögliche Vorbereitung umfasst verständliche Materialien, eine abgestimmte Aufgabenverteilung und die Klärung von Ort und erforderlichen Genehmigungen. Konkrete Informationen müssten die tatsächlichen Verantwortlichen ergänzen." },
      { heading: "Im Gespräch bleiben", text: "Eine offene Frage wirkt oft besser als ein langer Vortrag. Zuhören, Unklarheiten benennen und verlässliche Quellen anbieten könnten Leitlinien eines solchen Informationsangebots sein." },
    ],
  },
  {
    id: "post-4", slug: "dhv-stellungnahme-gkv", title: "Die DHV-Stellungnahme zur GKV-Debatte",
    date: "2026-10-06", category: "News", status: "verified", visual: "news", readingMinutes: 1, image: dhvMedia.newsLogo,
    teaser: "Der DHV stellt seine schriftliche Stellungnahme zur Anhörung öffentlich zur Verfügung.",
    source: { label: "Deutscher Hanfverband, 06.10.2026", url: "https://hanfverband.de/dhv-stellungnahme-zu-anhoerung-gkv-cannabis", checkedAt: "2026-10-10" },
    body: [
      { text: "Am 6. Oktober 2026 veröffentlichte der DHV seine schriftliche Stellungnahme für die Anhörung zu Änderungen des GKV-BStabG. Der Beitrag behandelt die Erstattung von Cannabismedikamenten durch die gesetzlichen Krankenversicherungen." },
      { heading: "Weiterlesen beim Bundesverband", text: "Der vollständige Text und die weiterführenden Verweise stehen auf der offiziellen DHV-Website. Diese Demo gibt keine medizinische oder rechtliche Einschätzung ab." },
    ],
  },
  {
    id: "post-5", slug: "deine-ideen-fuer-kassel", title: "Was würdest du in Kassel bewegen?",
    date: "2026-10-02", category: "Ortsgruppe", status: "demo", visual: "kassel", readingMinutes: 2,
    teaser: "Von Gestaltung bis Organisation: ein Beispiel dafür, wie unterschiedliche Talente zusammenfinden könnten.",
    body: [
      { text: "Dies ist ein Beispiel für einen lokalen Blogbeitrag. Eine tatsächliche Initiative, ein Aufruf der Ortsgruppe oder ein laufendes Projekt wird damit nicht behauptet." },
      { heading: "Dein Blick auf die Stadt", text: "Vielleicht kennst du einen Ort für Gespräche, fotografierst gerne oder bringst Erfahrung mit Veranstaltungsorganisation mit. Eine künftige Gruppe könnte ganz unterschiedliche Fähigkeiten gebrauchen." },
      { heading: "Offizielle Informationen", text: "Wer sich für eine DHV-Ortsgruppe interessiert, findet Informationen und einen Ortsgruppenleitfaden auf der offiziellen Website. Für Kassel ist in dieser Demo kein lokaler Kontakt bestätigt." },
    ],
  },
];
export const events: Event[] = [
  {
    id: "event-gruendung-2026", slug: "offenes-gruendungstreffen-15-oktober-2026",
    title: "Kassel braucht dich: offenes Gründungstreffen",
    type: "Offenes Gründungstreffen", status: "announced", phase: "upcoming",
    date: "2026-10-15", startsAt: "2026-10-15T19:00:00+02:00", endsAt: null,
    dateLabel: "Donnerstag, 15. Oktober 2026", timeLabel: "Ab 19:00 Uhr",
    location: "Haze & Chill Café · Kölnische Straße 12–14, 34117 Kassel",
    announcementUrl: site.facebookUrl,
    reportLabel: "Ankündigung laut bereitgestelltem Veranstaltungsflyer, übernommen am 11. Oktober 2026. Datum, Beginn und Ort sind dem Flyer entnommen. Das verlinkte Facebook-Profil wurde für diese Website mitgeteilt; die Ankündigung konnte dort nicht unabhängig geprüft werden.",
    description: "Offenes Treffen zur Neugründung der DHV-Ortsgruppe Kassel. Gemeinsam für Aufklärung, Vernetzung und eine vernünftige Drogenpolitik in Kassel und Umgebung. Kein Vorwissen nötig.",
    flyer: {
      src: "/images/events/gruendungstreffen-15-oktober-2026.webp",
      alt: "Flyer: Kassel braucht dich. Offenes Treffen zur Neugründung der DHV-Ortsgruppe Kassel am Donnerstag, 15. Oktober 2026 ab 19 Uhr im Haze & Chill Café, Kölnische Straße 12–14, 34117 Kassel. Kein Vorwissen nötig.",
      caption: "Bereitgestellter Veranstaltungsflyer · 15. Oktober 2026",
      credit: "Vom Auftraggeber für diese Website bereitgestellt; Bild- und Markenrechte verbleiben bei den jeweiligen Rechteinhabern.",
      width: 1122, height: 1402, fit: "contain",
    },
    body: [
      { heading: "Aufklären. Vernetzen. Verändern.", text: "Für Donnerstag, den 15. Oktober 2026, wird ab 19 Uhr ein offenes Treffen zur Neugründung der DHV-Ortsgruppe Kassel angekündigt. Treffpunkt ist das Haze & Chill Café in der Kölnischen Straße 12–14 in Kassel." },
      { heading: "Gemeinsam für Kassel und Umgebung", text: "Der Flyer nennt eine vernünftige Drogenpolitik, Cannabis-Normalisierung und mehr Aufklärung als Anliegen. Weitere Themen sind Jugendschutz statt Kriminalisierung, Aufklärung zu Safer Use, Gemeinschaft und ein regelmäßiger Stammtisch sowie Infostände und Aktionen." },
      { heading: "Kein Vorwissen nötig", text: "Das Treffen ist als offener Austausch mit Gleichgesinnten angekündigt. Auch ohne Vorkenntnisse kannst du dabei sein und deine Perspektive einbringen. Eine Endzeit, Teilnahmegebühr oder verbindliche Anmeldung sind im Flyer nicht angegeben." },
      { heading: "In Verbindung bleiben", text: "Das für diese Website mitgeteilte Facebook-Profil ist unten verlinkt. Die Ankündigung des Gründungstreffens ist unabhängig vom geplanten wiederkehrenden Cannabis-Testformat: Für diesen Abend werden keine Tests, Preise oder Teilnahme der Living Soil Crew angekündigt." },
    ],
  },
  {
    id: "event-haze-chill", slug: "treffen-haze-chill-9-oktober-2026",
    title: "Treffen im Haze & Chill mit DHV & Living Soil Crew", type: "Lokales Treffen",
    status: "reported", phase: "past", date: "2026-10-09", startsAt: null, endsAt: null,
    dateLabel: "9. Oktober 2026", timeLabel: "Uhrzeit nicht dokumentiert",
    location: "Haze & Chill · Kölnische Straße 12–14, Kassel",
    relatedPostSlug: "rueckblick-haze-chill-living-soil-crew",
    reportLabel: "Veranstaltungsdaten und Eindrücke wurden für diese Website mitgeteilt. Die Adresse ist zusätzlich über die Website des Cafés nachvollziehbar. Dies ist kein offizieller DHV-Veranstaltungsbericht.",
    description: "Gut besuchter Abend mit DHV und Living Soil Crew, Cannabis-Tests gegen einen kleinen Betrag und drei Platzierungen. Für den höchsten Messwert gab es einen Preis.",
    body: [
      { heading: "Rückblick auf den 9. Oktober", text: "Am 9. Oktober 2026 kamen wir im Haze & Chill Café in der Kölnischen Straße 12–14 in Kassel zusammen. Das Treffen war gut besucht und hat Spaß gemacht." },
      { heading: "Gemeinsam vor Ort", text: "Der Deutsche Hanfverband und die Living Soil Crew waren dabei. Wir bedanken uns bei allen, die den Abend mit uns verbracht haben. Den ausführlichen Rückblick findest du im Blog." },
      { heading: "Cannabis-Tests und Platzierungen", text: "Die Living Soil Crew brachte ein Testgerät mit. Gegen einen kleinen Betrag konnte eigenes Cannabis getestet werden. Der höchste Messwert erhielt einen Preis; außerdem gab es einen zweiten und dritten Platz. Konkrete Beträge, Messwerte, Namen oder Preise sind nicht angegeben." },
      { heading: "Ein wiederkehrendes Format", text: "Das Treffen soll künftig wiederkehren. Ein Folgetermin ist noch nicht festgelegt. Die nächsten bestätigten Angaben werden unter den kommenden Veranstaltungen ergänzt." },
    ],
  },
  {
    id: "event-haze-series", slug: "haze-chill-wiederkehrendes-treffen",
    title: "Haze & Chill: Austausch & Cannabis-Tests", type: "Wiederkehrendes Format",
    status: "planned", phase: "upcoming", startsAt: null, endsAt: null,
    dateLabel: "Folgetermin noch offen", timeLabel: "Uhrzeit noch offen",
    location: "Haze & Chill · Kölnische Straße 12–14, Kassel",
    relatedPostSlug: "rueckblick-haze-chill-living-soil-crew",
    reportLabel: "Die Wiederholung wurde für diese Website angekündigt. Datum, Turnus, Beteiligte, Testangebot und Teilnahmebedingungen eines Folgetermins müssen noch bestätigt werden.",
    description: "Das Treffen im Haze & Chill soll wiederkehren. Nach dem Auftakt am 9. Oktober warten wir noch auf den nächsten bestätigten Termin.",
    body: [
      { heading: "Nach dem Auftakt geht es weiter", text: "Der gut besuchte Abend am 9. Oktober 2026 soll der Anfang eines wiederkehrenden Formats sein. Der geplante Rahmen ist ein Treffen im Haze & Chill mit Austausch und Cannabis-Tests." },
      { heading: "Was für den nächsten Abend noch offen ist", text: "Es gibt noch keinen festgelegten Folgetermin oder regelmäßigen Turnus. Uhrzeit, das konkrete Testangebot, ein etwaiger Betrag, die beteiligten Personen und Teilnahmebedingungen werden für jeden Termin gesondert bestätigt." },
      { heading: "So war der erste Abend", text: "Beim Auftakt waren der Deutsche Hanfverband und die Living Soil Crew dabei. Eigenes Cannabis konnte gegen einen kleinen Betrag getestet werden. Es gab einen Preis für den höchsten Messwert sowie einen zweiten und dritten Platz. Den Bericht findest du im Blog." },
    ],
  },
  {
    id: "event-1", slug: "offener-austausch", title: "Offener Austausch in Kassel", type: "Kennenlernen",
    status: "demo", phase: "upcoming", startsAt: null, endsAt: null,
    dateLabel: "Termin offen", timeLabel: "Uhrzeit noch offen", location: "Kassel · Treffpunkt noch offen",
    description: "Ein Beispiel für ein lockeres Kennenlernen mit Raum für Fragen, Perspektiven und neue Ideen.",
    body: [{ heading: "Ein mögliches Format", text: "Ein offener Austausch könnte Interessierte in Kassel zusammenbringen. Es könnten Fragen gesammelt und Ideen für lokale Informationsangebote besprochen werden. Dies ist ein Demo-Inhalt, keine angekündigte Veranstaltung." }, { heading: "Termin und Teilnahme", text: "Datum, Uhrzeit, Ort, Veranstalter und Teilnahmebedingungen sind nicht bestätigt. Es gibt keine Anmeldung und keinen Kalendereintrag. Verbindliche Termine findest du ausschließlich in den offiziellen Ankündigungen." }],
  },
  {
    id: "event-2", slug: "werkstatt-fuer-ideen", title: "Ideenwerkstatt: gemeinsam aktiv werden", type: "Workshop",
    status: "demo", phase: "upcoming", startsAt: null, endsAt: null,
    dateLabel: "Termin offen", timeLabel: "Uhrzeit noch offen", location: "Kassel · Ort noch offen",
    description: "Ein beispielhafter Workshop, um aus ersten Gedanken konkrete Ideen für lokales Engagement zu entwickeln.",
    body: [{ heading: "Von der Idee zum nächsten Schritt", text: "In einem solchen Workshop könnten kleine Teams Themen sammeln, Materialien entwerfen und Aufgaben verteilen. Der Ablauf ist ein realistisches Beispiel, kein bestehendes Angebot der Ortsgruppe." }, { heading: "Noch keine Veranstaltung", text: "Es sind keine echten Termine oder Orte hinterlegt. Vor einer Ankündigung müssen Veranstalter, Organisation, Zugänglichkeit und Teilnahmebedingungen geklärt werden." }],
  },
  {
    id: "event-3", slug: "beispiel-rueckblick-infostand", title: "Rückblick: Gespräche am Infostand", type: "Aktion",
    status: "demo", phase: "past", startsAt: null, endsAt: null,
    dateLabel: "Beispiel-Rückblick", timeLabel: "Kein tatsächlicher Termin", location: "Beispielort · Kassel",
    description: "So könnte ein Veranstaltungsrückblick aussehen. Diese Aktion hat nicht nachweislich stattgefunden.",
    body: [{ heading: "Beispiel für das Archiv", text: "Ein Rückblick könnte Themen, Materialien und Erfahrungen einer Aktion dokumentieren. Dieser Archiveintrag ist vollständig erfunden und zeigt ausschließlich die Darstellung eines vergangenen Termins." }, { heading: "Was hier später stehen könnte", text: "Nach einer echten Veranstaltung wären ein freigegebener Bericht, bestätigte Angaben und gegebenenfalls Fotos mit geklärten Rechten sinnvoll. Es werden hier keine Teilnahmezahlen oder Aussagen tatsächlicher Personen erfunden." }],
  },
];
export function formatDate(date: string) { return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric", timeZone: "Europe/Berlin" }).format(new Date(`${date}T12:00:00Z`)); }
export function getPosts() { return [...posts].sort((a, b) => b.date.localeCompare(a.date)); }
export function getEvents(phase: Event["phase"]) { return events.filter(event => event.phase === phase); }
