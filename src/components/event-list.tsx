"use client";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { type Event } from "@/data/content";
import { EventRow } from "./ui";
export function EventList({ events, initialPhase = "upcoming" }: { events: Event[]; initialPhase?: Event["phase"] }) {
  const [phase, setPhase] = useState<Event["phase"]>(initialPhase);
  const filtered = events.filter(event => event.phase === phase);
  const count = (status: Event["status"]) => filtered.filter(event => event.status === status).length;
  const labels = [
    count("announced") ? `${count("announced")} angekündigt` : "",
    count("planned") ? `${count("planned")} in Planung` : "",
    count("reported") ? `${count("reported")} Rückblick` : "",
    count("demo") ? `${count("demo")} Demo-Beispiele` : "",
  ].filter(Boolean).join(" · ");
  return <><div className="filter-toolbar"><div className="filter-tabs" role="group" aria-label="Veranstaltungszeitraum"><button type="button" aria-pressed={phase === "upcoming"} onClick={() => setPhase("upcoming")}>Kommende Veranstaltungen</button><button type="button" aria-pressed={phase === "past"} onClick={() => setPhase("past")}>Vergangene Veranstaltungen</button></div><span className="subtle">{labels}</span></div><p className="event-list-note" role="status">{phase === "upcoming" ? "Das offene Gründungstreffen am 15. Oktober ist laut Flyer angekündigt. Das separate Cannabis-Testformat bleibt in Planung. Zusätzliche Beispielideen sind als Demo-Inhalt gekennzeichnet." : "Lokale Rückblicke basieren auf Angaben für diese Website. Beispielveranstaltungen tragen zusätzlich die Kennzeichnung Demo-Inhalt."}</p><div className="event-list">{filtered.map(event => <EventRow event={event} key={event.id} />)}</div>{!filtered.length && <div className="empty-state"><CalendarDays /><h2>Aktuell keine Einträge.</h2></div>}</>;
}
