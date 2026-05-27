import React from 'react';
import { IcCode, IcGlobe, IcSpark, IcLayers, IcBolt, IcShield } from './Icons';

interface CapItem {
  icon: React.ReactNode;
  t: string;
  d: string;
}

const CAPS: CapItem[] = [
  { icon: <IcCode />, t: "Aplicações Web", d: "SPAs, dashboards e portais com React, TypeScript e infra moderna." },
  { icon: <IcGlobe />, t: "Apps mobile e PWAs", d: "Experiências em iOS, Android e Web — uma base, três alvos." },
  { icon: <IcSpark />, t: "Produtos com IA", d: "Visão computacional, fala, NLP e modelos LLM integrados ao seu fluxo." },
  { icon: <IcLayers />, t: "Plataformas SaaS", d: "Multi-tenant, billing, painel admin e API pública prontos para escalar." },
  { icon: <IcBolt />, t: "Integrações & APIs", d: "Pagamentos, ERPs, mensageria, webhooks. Conectamos o que precisar." },
  { icon: <IcShield />, t: "Operação contínua", d: "Não entregamos e somem. Mantemos, monitoramos e evoluímos com você." },
];

const Capabilities: React.FC = () => {
  return (
    <section className="r-section" id="servicos">
      <div className="r-container">
        <div className="r-section-head r-reveal">
          <span className="r-eyebrow">O que fazemos</span>
          <h2 className="r-h2">
            Engenharia ponta a ponta —
            <br />
            desde a primeira tela.
          </h2>
          <p className="r-lead">
            Trabalhamos como um time interno embarcado: do produto à infra,
            do design ao deploy. Um único interlocutor, um único responsável.
          </p>
        </div>
        <div className="r-caps">
          {CAPS.map((c, i) => (
            <div
              className="r-cap r-reveal"
              key={i}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="r-cap-icon">{c.icon}</div>
              <div className="r-cap-title">{c.t}</div>
              <div className="r-cap-desc">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
