"use client";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { type Event } from "@/data/content";
import { EventRow } from "./ui";
export function EventList({ events, initialPhase = "upcoming" }: { events: Event[]; initialPhase?: Event["phase"] }) {
  const [phase, setPhase] = useState<Event["phase"]>(initialPhase);
  const filtered = events.filter(event => event.phase === phase);
  return <><div className="filter-toolbar"><div className="filter-tabs" role="group" aria-label="Veranstaltungszeitraum"><button type="button" aria-pressed={phase === "upcoming"} onClick={() => setPhase("upcoming")}>Kommende Veranstaltungen</button><button type="button" aria-pressed={phase === "past"} onClick={() => setPhase("past")}>Vergangene Veranstaltungen</button></div><span className="subtle">{filtered.filter(event => event.status !== "demo").length} {phase === "past" ? "Rückblick" : "Format in Planung"} · {filtered.filter(event => event.status === "demo").length} Demo-Beispiele</span></div><p className="event-list-note" role="status">{phase === "upcoming" ? "Das Treffen im Haze & Chill soll wiederkehren. Ein Folgetermin steht noch nicht fest. Zusätzliche Beispielideen sind als Demo-Inhalt gekennzeichnet." : "Lokale Rückblicke basieren auf Angaben für diese Website. Beispielveranstaltungen tragen zusätzlich die Kennzeichnung Demo-Inhalt."}</p><div className="event-list">{filtered.map(event => <EventRow event={event} key={event.id} />)}</div>{!filtered.length && <div className="empty-state"><CalendarDays /><h2>Aktuell keine Einträge.</h2></div>}</>;
}
