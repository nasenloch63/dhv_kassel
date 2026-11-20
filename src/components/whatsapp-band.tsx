import { WhatsAppButton } from "./whatsapp-button";
import { FacebookButton } from "./facebook-button";
import { InstagramButton } from "./instagram-button";

export function WhatsAppBand() {
  return (
    <section className="dhv-section-wrap">
      <div className="container">
        <div className="dhv-box dhv-box-secondary dhv-info-box">
          <h2>Kassel-Info: Nichts mehr verpassen</h2>
          <p>
            Immer auf dem Laufenden bleiben mit den aktuellen Neuigkeiten, Rückblicken und
            Terminen der DHV-Ortsgruppe Kassel – direkt in unserem WhatsApp-Kanal sowie auf
            Facebook und Instagram.
          </p>
          <div className="dhv-info-actions">
            <WhatsAppButton>WhatsApp-Kanal öffnen</WhatsAppButton>
            <InstagramButton />
            <FacebookButton />
          </div>
        </div>
      </div>
    </section>
  );
}
