"use client";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { type Event } from "@/data/content";
import { EventRow } from "./ui";
export function EventList({ events }: { events: Event[] }) {
  const [phase, setPhase] = useState<Event["phase"]>("upcoming");
  const filtered = events.filter(event => event.phase === phase);
  return <><div className="filter-toolbar"><div className="filter-tabs" role="group" aria-label="Veranstaltungszeitraum"><button type="button" aria-pressed={phase === "upcoming"} onClick={() => setPhase("upcoming")}>Kommende Veranstaltungen</button><button type="button" aria-pressed={phase === "past"} onClick={() => setPhase("past")}>Vergangene Veranstaltungen</button></div><span className="subtle">{filtered.length} Demo-Beispiele</span></div><p className="event-list-note" role="status">{phase === "upcoming" ? "Keine bestätigten kommenden Termine. Die folgenden Formate sind Demo-Inhalte ohne Veranstaltungsdatum." : "Beispielarchiv: Die folgenden Demo-Inhalte dokumentieren keine tatsächlichen Veranstaltungen."}</p><div className="event-list">{filtered.map(event => <EventRow event={event} key={event.id} />)}</div>{!filtered.length && <div className="empty-state"><CalendarDays /><h2>Aktuell keine Einträge.</h2></div>}</>;
}
