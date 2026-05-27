import React from 'react';
import { IcArrow, IcCheck } from './Icons';

export function UAUScene() {
  return (
    <div className="scene uau-scene" style={{ padding: 0 }}>
      <img
        src="/assets/uau_desktop.png"
        alt="UAU Code Dashboard"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

export function AudiverScene() {
  return (
    <div className="scene audv-scene" style={{ padding: 0 }}>
      <img
        src="/assets/audiover_desktop.png"
        alt="Audiover Dashboard"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

export function UAUShowcase() {
  return (
    <div className="r-product">
      <div className="r-product-copy">
        <div className="r-product-tag">
          <span
            className="swatch"
            style={{
              background: 'linear-gradient(135deg,#3156F3,#BC36C2,#F5464A)',
            }}
          ></span>
          Produto · 2024
        </div>
        <h3 className="r-product-title">UAU Code</h3>
        <p className="r-product-tagline">
          Imagens inteligentes. A evolução do QR Code — qualquer foto impressa vira ponto de
          partida para um vídeo, áudio ou modelo 3D, reconhecido pela câmera do celular.
        </p>
        <div className="r-product-features">
          <div className="r-feature">
            <IcCheck />
            <span>Reconhecimento de imagem on-device</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>Overlay de vídeo, áudio e 3D</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>Painel de criação no navegador</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>PWA — sem app na loja</span>
          </div>
        </div>
        <div className="r-product-links">
          <a
            href="https://uaucode.app"
            target="_blank"
            rel="noopener noreferrer"
            className="r-btn r-btn-ghost"
          >
            uaucode.app <IcArrow size={14} />
          </a>
          <a href="#contato" className="r-btn r-btn-link">
            Quero algo parecido →
          </a>
        </div>
      </div>
      <div
        className="r-product-visual"
        style={{ '--accent-glow': 'rgba(188,54,194,0.25)' } as React.CSSProperties}
      >
        <UAUScene />
      </div>
    </div>
  );
}

export function AudioverShowcase() {
  return (
    <div className="r-product reverse">
      <div className="r-product-copy">
        <div className="r-product-tag">
          <span
            className="swatch"
            style={{ background: 'linear-gradient(135deg,#3156F3,#7E55E8)' }}
          ></span>
          Produto · 2025
        </div>
        <h3 className="r-product-title">Audiover</h3>
        <p className="r-product-tagline">
          Plataforma de áudio inteligente: transcreve, resume e gera cortes a partir de
          gravações, podcasts e reuniões. Edição de áudio guiada por texto.
        </p>
        <div className="r-product-features">
          <div className="r-feature">
            <IcCheck />
            <span>Transcrição com diarização em PT-BR</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>Resumos e capítulos automáticos</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>Cortes prontos para redes sociais</span>
          </div>
          <div className="r-feature">
            <IcCheck />
            <span>API para integração em fluxos próprios</span>
          </div>
        </div>
        <div className="r-product-links">
          <a
            href="https://www.audiover.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="r-btn r-btn-ghost"
          >
            audiover.com.br <IcArrow size={14} />
          </a>
          <a href="#contato" className="r-btn r-btn-link">
            Quero algo parecido →
          </a>
        </div>
      </div>
      <div
        className="r-product-visual"
        style={{ '--accent-glow': 'rgba(49,86,243,0.22)' } as React.CSSProperties}
      >
        <AudiverScene />
      </div>
    </div>
  );
}

const Products: React.FC = () => {
  return (
    <section className="r-section" id="produtos">
      <div className="r-container">
        <div className="r-section-head r-reveal">
          <span className="r-eyebrow">Portfólio próprio</span>
          <h2 className="r-h2">
            Antes de construir o seu produto,
            <br />
            construímos os nossos.
          </h2>
          <p className="r-lead">
            Estes são produtos que nasceram dentro da RATEC. Não são mockups: rodam em produção,
            têm usuários pagantes e nos ensinam tudo o que aplicamos nos projetos de clientes.
          </p>
        </div>
        <div className="r-showcase">
          <div className="r-reveal">
            <UAUShowcase />
          </div>
          <div className="r-reveal">
            <AudioverShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
