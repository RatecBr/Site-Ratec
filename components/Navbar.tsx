import React, { useState, useEffect } from 'react';
import { IcArrow, IcSun, IcMoon } from './Icons';

interface NavbarProps {
  onToggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`r-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="r-container r-nav-inner">
        <a href="#top" className="r-nav-logo" aria-label="RATEC">
          <img src="/assets/logo.png" alt="RATEC Logo" style={{ height: 26, width: 'auto' }} />
          <span>RATEC</span>
        </a>
        <div className="r-nav-links">
          <a href="#produtos">Produtos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="r-nav-right">
          <button
            className="r-btn r-btn-ghost"
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            style={{ padding: '8px', minHeight: 36, width: 36 }}
          >
            {theme === 'dark' ? <IcSun size={16} /> : <IcMoon size={16} />}
          </button>
          <a href="#contato" className="r-btn r-btn-primary">
            Conversar
            <IcArrow size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
