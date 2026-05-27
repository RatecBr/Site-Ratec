import React from 'react';
import { IcArrow } from './Icons';

const Contact: React.FC = () => {
  return (
    <section className="r-section" id="contato">
      <div className="r-container">
        <div className="r-cta-card r-reveal">
          <span
            className="r-eyebrow"
            style={{ marginBottom: 18, display: 'inline-flex' }}
          >
            Próximo passo
          </span>
          <h2 className="r-h2" style={{ marginTop: 16 }}>
            Tem um produto em mente?
            <br />
            <span className="r-grad-text">Vamos conversar.</span>
          </h2>
          <p className="r-lead" style={{ marginTop: 20, maxWidth: 560 }}>
            Respondemos em até 24h em dias úteis. Conversa inicial é sempre gratuita —
            preferimos entender antes de propor.
          </p>
          <div className="r-cta-row">
            <a
              href="mailto:contato@ra.tec.br"
              className="r-btn r-btn-primary r-btn-lg"
            >
              contato@ra.tec.br <IcArrow size={15} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5562981173666&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Ratec&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="r-btn r-btn-ghost r-btn-lg"
            >
              Fale pelo WhatsApp
            </a>
            <span className="r-cta-note">Goiânia · Brasil </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
