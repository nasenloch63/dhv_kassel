export type ContentStatus = "verified" | "demo";
export type Category = "Ortsgruppe" | "Aktionen" | "News";
export interface Source { label: string; url: string; checkedAt: string }
export interface Paragraph { heading?: string; text: string }
export interface Post {
  id: string; slug: string; title: string; date: string; category: Category;
  teaser: string; status: ContentStatus; visual: "kassel" | "news" | "action";
  readingMinutes: number; body: Paragraph[]; source?: Source;
}
export interface Event {
  id: string; slug: string; title: string; status: ContentStatus;
  phase: "upcoming" | "past"; startsAt: string | null; endsAt: string | null;
  dateLabel: string; timeLabel: string; location: string; type: string;
  description: string; body: Paragraph[]; source?: Source;
}
export const site = {
  name: "DHV-Ortsgruppe Kassel", origin: "https://dhv-kassel-demo.vercel.app",
  researchDate: "10.10.2026", contactUrl: "https://hanfverband.de/kontakt",
  groupsUrl: "https://hanfverband.de/aktiv-vor-ort", datesUrl: "https://hanfverband.de/termine",
  localStatus: "Für Kassel wurde bei der Recherche am 10.10.2026 kein Eintrag in der offiziellen DHV-Ortsgruppenliste gefunden. Eine offizielle Ortsgruppe, lokale Ansprechpartner und Termine sind hier daher nicht bestätigt.",
};
export const posts: Post[] = [
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
    date: "2026-10-09", category: "News", status: "verified", visual: "news", readingMinutes: 1,
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
    date: "2026-10-06", category: "News", status: "verified", visual: "news", readingMinutes: 1,
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
