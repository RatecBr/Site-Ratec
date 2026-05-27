import React from 'react';
import { IcArrow, IcCheck, IcPlay } from './Icons';

export function UAUScene() {
  return (
    <div className="scene uau-scene">
      <div className="uau-phone">
        <div className="uau-phone-screen">
          <div className="uau-status">
            <span className="pulse"></span> RECONHECENDO IMAGEM
          </div>
          <div className="uau-target">
            <div className="play">
              <IcPlay size={18} />
            </div>
          </div>
          <div className="uau-cap">
            <div className="uau-cap-title">Cartão de visita · RATEC</div>
            Vídeo de apresentação · 0:42 · toque para abrir
          </div>
        </div>
      </div>
    </div>
  );
}

export function AudiverScene() {
  const bars = [
    22, 38, 60, 80, 95, 70, 50, 78, 92, 64, 40, 26, 48, 70, 88, 72, 55, 42, 30, 20,
    35, 58, 74, 60, 44, 28,
  ];
  return (
    <div className="scene audv-scene">
      <div className="audv-window">
        <div className="audv-head">
          <div className="title">
            <span className="dot"></span> episodio-04-final.mp3
          </div>
          <div className="duration">02:14 / 18:36</div>
        </div>
        <div className="audv-wave">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`bar ${i > 11 ? 'dim' : ''}`}
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
        <div className="audv-transcript">
          <div className="audv-line">
            <span className="t">02:08</span>
            <span>O ponto é que a gente precisa medir antes de</span>
          </div>
          <div className="audv-line active">
            <span className="t">02:14</span>
            <span>otimizar. Sem dado, é só intuição com confiança.</span>
          </div>
          <div className="audv-line">
            <span className="t">02:21</span>
            <span>Foi isso que mudou quando a gente começou a</span>
          </div>
        </div>
        <div className="audv-tags">
          <span className="audv-tag">capítulo</span>
          <span className="audv-tag">resumo</span>
          <span className="audv-tag">corte 0:14s</span>
        </div>
      </div>
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
