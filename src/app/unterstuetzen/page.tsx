import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MapPin, CalendarDays } from "lucide-react";
import { PageIntro, ButtonLink, DemoNote } from "@/components/ui";
import { supportOptions, supportSource } from "@/data/support";
import { monthlyMeeting } from "@/data/content";

export const metadata: Metadata = {
  title: "Den DHV unterstützen",
  description: "Regelmäßig fördern, einmalig spenden, als Unternehmen oder CSC unterstützen und den DHV-Shop entdecken. Direkt zu den offiziellen Angeboten des Bundesverbands.",
};

export default function SupportPage() {
  return <>
    <PageIntro eyebrow="GEMEINSAM MEHR BEWEGEN" title="Den DHV unterstützen.">
      <p>Für Aufklärung und eine vernünftige Cannabispolitik. Unterstütze die Arbeit des Deutschen Hanfverbands auf einem Weg, der zu dir passt.</p>
    </PageIntro>
    <div className="container support-intro"><DemoNote>Alle finanziellen Angebote richten sich an den Bundesverband, nicht an ein Kasseler Spendenkonto. Auf dieser Demoseite werden keine Zahlungen oder Förderanträge entgegengenommen.</DemoNote></div>
    <div className="support-options">
      {supportOptions.map((option, index) => <section className="support-row" key={option.id} id={option.id}>
        <div className="container support-row-inner">
          <div className="support-art"><Image src={option.image} alt="" width={option.width} height={option.height} className="support-icon" sizes="200px" priority={index === 0} /><span>Originalgrafik · Deutscher Hanfverband</span></div>
          <div className="support-copy"><p className="eyebrow">{option.eyebrow}</p><h2>{option.title}</h2><p>{option.text}</p><ButtonLink href={option.href} external>{option.action}</ButtonLink></div>
        </div>
      </section>)}
    </div>
    <section className="support-local"><div className="container support-local-inner">
      <div><HeartHandshake size={30} strokeWidth={1.5} aria-hidden="true" /><p className="eyebrow">DEINE ZEIT ZÄHLT AUCH</p><h2>Vor Ort in Kassel mitmachen.</h2><p>Bring deine Fragen, Ideen und Perspektiven mit zu unserem monatlichen Treffen.</p><div className="support-meeting"><span><CalendarDays size={17} aria-hidden="true" />{monthlyMeeting.schedule} · {monthlyMeeting.timeLabel}</span><span><MapPin size={17} aria-hidden="true" />{monthlyMeeting.venue}</span></div></div>
      <ButtonLink href={`/veranstaltungen/${monthlyMeeting.slug}/`} variant="light">Zum monatlichen Treffen</ButtonLink>
    </div></section>
    <section className="container support-source"><p>Quelle: <a href={supportSource.url} target="_blank" rel="noopener noreferrer">Offizielle Unterstützen-Seite des DHV</a> · geprüft am 16.10.2026. Maßgeblich sind die aktuellen Angaben und Bedingungen des Bundesverbands.</p></section>
  </>;
}
