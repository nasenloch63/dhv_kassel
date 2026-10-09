"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { type Post } from "@/data/content";
import { PostCard } from "./ui";
const categories = ["Alle Beiträge", "Ortsgruppe", "Aktionen", "News"] as const;
export function PostList({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState<string>("Alle Beiträge"); const [query, setQuery] = useState("");
  const filtered = posts.filter(post => (category === "Alle Beiträge" || post.category === category) && `${post.title} ${post.teaser}`.toLocaleLowerCase("de").includes(query.trim().toLocaleLowerCase("de")));
  return <><div className="filter-toolbar"><div className="filter-tabs" role="group" aria-label="Beiträge nach Kategorie filtern">{categories.map(item => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div><div className="search-field"><Search size={18} aria-hidden="true" /><input type="search" aria-label="Beiträge durchsuchen" placeholder="Beiträge suchen" value={query} onChange={event => setQuery(event.target.value)} />{query && <button onClick={() => setQuery("")} aria-label="Suche zurücksetzen"><X size={15} /></button>}</div></div><p className="results-count" role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "Beitrag" : "Beiträge"}</p>{filtered.length ? <div className="post-grid">{filtered.map(post => <PostCard key={post.id} post={post} />)}</div> : <div className="empty-state"><Search size={30} /><h2>Keine Beiträge gefunden.</h2><p>Für diese Auswahl liegen keine Beiträge vor.</p><button className="button primary" onClick={() => { setCategory("Alle Beiträge"); setQuery(""); }}>Alle Beiträge anzeigen</button></div>}</>;
}
