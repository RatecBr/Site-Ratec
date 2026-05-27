import React from 'react';

interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

const STEPS: ProcessStep[] = [
  {
    n: "01",
    t: "Descoberta",
    d: "Uma ou duas conversas para entender objetivo, restrições e prazo. Saímos com escopo enxuto e proposta clara.",
  },
  {
    n: "02",
    t: "Protótipo",
    d: "Em 2–3 semanas, um protótipo navegável com decisões de produto e arquitetura validadas.",
  },
  {
    n: "03",
    t: "Construção",
    d: "Sprints curtas, código de produção desde o dia um. Deploy contínuo, sem surpresas no final.",
  },
  {
    n: "04",
    t: "Operação",
    d: "A entrega não é o fim. Acompanhamos métricas, ajustamos e evoluímos junto com o seu time.",
  },
];

const Process: React.FC = () => {
  return (
    <section className="r-section" id="processo">
      <div className="r-container">
        <div className="r-section-head r-reveal">
          <span className="r-eyebrow">Como trabalhamos</span>
          <h2 className="r-h2">
            Pequeno o bastante para ser ágil.
            <br />
            Sério o bastante para sustentar.
          </h2>
        </div>
        <div className="r-process">
          {STEPS.map((s, i) => (
            <div
              className="r-reveal r-step"
              key={i}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="r-step-num">{s.n}</div>
              <div className="r-step-title">{s.t}</div>
              <div className="r-step-desc">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
