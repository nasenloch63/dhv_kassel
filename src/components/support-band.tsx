import Image from "next/image";
import { ButtonLink } from "./ui";

export function SupportBand() {
  return (
    <section className="dhv-section-wrap">
      <div className="container">
        <div className="dhv-box dhv-box-secondary dhv-split-box">
          <div className="dhv-split-art">
            <Image
              src="/images/dhv/support/foerdern.png"
              alt="Icon DHV Unterstützen"
              width={260}
              height={200}
              className="dhv-support-illustration"
            />
          </div>
          <div className="dhv-split-copy">
            <h2>Man muss die Pflanze gießen, damit sie wächst!</h2>
            <p>
              Als privater DHV-Förderer kannst du die Legalisierung mit einem regelmäßigen Beitrag
              vorantreiben und erhältst bestimmte, exklusive Leistungen. Oder du unterstützt den
              Deutschen Hanfverband mit einer einmaligen Spende oder deinem Engagement vor Ort in
              Kassel.
            </p>
            <div className="dhv-split-actions">
              <ButtonLink href="/unterstuetzen/">Unterstützen</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
