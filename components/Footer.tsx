import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="r-footer">
      <div className="r-container">
        <div className="r-footer-grid">
          <div>
            <a href="#top" className="r-nav-logo" style={{ marginBottom: 16 }}>
              <img src="/assets/logo.png" alt="RATEC Logo" style={{ height: 26, width: 'auto' }} />
              <span>RATEC</span>
            </a>
            <p style={{ fontSize: 14, color: 'var(--r-text-muted)', maxWidth: 320, marginTop: 16, lineHeight: 1.6 }}>
              Estúdio de software brasileiro. Construímos produtos próprios e ajudamos
              empresas a construírem os delas.
            </p>
          </div>
          <div>
            <h4>Produtos</h4>
            <ul>
              <li><a href="https://uaucode.app" target="_blank" rel="noopener noreferrer">UAU Code</a></li>
              <li><a href="https://www.audiover.com.br" target="_blank" rel="noopener noreferrer">Audiover</a></li>
            </ul>
          </div>
          <div>
            <h4>RATEC</h4>
            <ul>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:contato@ra.tec.br">contato@ra.tec.br</a></li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5562981173666&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Ratec&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="https://www.instagram.com/ra.tec.br/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com/@ra.tec.brasil" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="r-footer-bottom">
          <span>© {new Date().getFullYear()} RATEC · Soluções Inteligentes. Todos os direitos reservados.</span>
          <span style={{ fontFamily: 'var(--r-mono)' }}>ra.tec.br</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
