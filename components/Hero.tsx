import React from 'react';
import { IcArrow } from './Icons';

interface HeroCopyItem {
  eyebrow: string;
  h1: React.ReactNode;
  lead: string;
}

const HERO_COPY: HeroCopyItem[] = [
  {
    eyebrow: "Estúdio de software",
    h1: (
      <>
        Construímos software<br />
        como se fosse <span className="r-grad-text">nosso produto</span>.
      </>
    ),
    lead: "A RATEC é um pequeno estúdio que projeta, desenvolve e opera sistemas — e os nossos próprios produtos, como UAU Code e Audiover, são prova viva disso.",
  },
  {
    eyebrow: "Software com viés de produto",
    h1: (
      <>
        Engenharia de produto.<br />
        Da ideia <span className="r-grad-text">ao deploy</span>.
      </>
    ),
    lead: "Times pequenos, decisões rápidas e código que respira manutenção. Construímos o seu sistema com o mesmo cuidado que aplicamos no UAU Code e no Audiover.",
  },
  {
    eyebrow: "RATEC · Soluções inteligentes",
    h1: (
      <>
        Um estúdio brasileiro <span className="r-grad-text">construindo o que falta</span>.
      </>
    ),
    lead: "Aplicações web, mobile e plataformas com IA. Quando o mercado não tinha o produto certo, fizemos o nosso — UAU Code e Audiover. Agora ajudamos você a fazer o seu.",
  },
];

interface HeroProps {
  copyIndex: number;
}

const Hero: React.FC<HeroProps> = ({ copyIndex }) => {
  const c = HERO_COPY[copyIndex] || HERO_COPY[0];

  return (
    <header className="r-hero" id="top">
      <div className="r-hero-bg">
        <div className="r-hero-grid"></div>
        <div className="r-hero-blob"></div>
      </div>
      <div className="r-container r-hero-inner">
        <div className="r-hero-meta r-reveal">
          <span className="r-eyebrow">{c.eyebrow}</span>
        </div>
        <h1 className="r-h1 r-reveal" style={{ transitionDelay: '60ms' }}>
          {c.h1}
        </h1>
        <p className="r-lead r-reveal" style={{ transitionDelay: '120ms' }}>
          {c.lead}
        </p>
        <div className="r-hero-cta r-reveal" style={{ transitionDelay: '180ms' }}>
          <a href="#contato" className="r-btn r-btn-primary r-btn-lg">
            Começar um projeto <IcArrow size={15} />
          </a>
          <a href="#produtos" className="r-btn r-btn-ghost r-btn-lg">
            Ver nossos produtos
          </a>
        </div>

        <div className="r-hero-stats r-reveal" style={{ transitionDelay: '260ms' }}>
          <div className="r-stat">
            <div className="r-stat-value">12+</div>
            <div className="r-stat-label">Anos construindo produtos digitais</div>
          </div>
          <div className="r-stat">
            <div className="r-stat-value">2</div>
            <div className="r-stat-label">Produtos próprios em operação</div>
          </div>
          <div className="r-stat">
            <div className="r-stat-value">100%</div>
            <div className="r-stat-label">Código autoral, sem terceirização</div>
          </div>
          <div className="r-stat">
            <div className="r-stat-value">∞</div>
            <div className="r-stat-label">Manutenção incluída no escopo</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
