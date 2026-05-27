import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  TweaksPanel,
  TweakSection,
  TweakRadio,
  useTweaks,
} from './components/TweaksPanel';

interface TweakDefaults {
  theme: 'dark' | 'light';
  density: 'compact' | 'comfy' | 'spacious';
  heroCopy: number;
}

const TWEAK_DEFAULTS: TweakDefaults = {
  theme: 'dark',
  density: 'comfy',
  heroCopy: 0,
};

const App: React.FC = () => {
  const [tweaks, setTweak] = useTweaks<TweakDefaults>(TWEAK_DEFAULTS);

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (tweaks.theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [tweaks.theme]);

  // Apply density padding multiplier as a CSS variable on the document element
  useEffect(() => {
    const v = tweaks.density === 'compact' ? 0.72 : tweaks.density === 'spacious' ? 1.25 : 1;
    document.documentElement.style.setProperty('--r-density', String(v));
  }, [tweaks.density]);

  // Scroll reveal intersection observer to animate sections into view
  useEffect(() => {
    const els = document.querySelectorAll('.r-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [tweaks.heroCopy]);

  const toggleTheme = () => {
    setTweak('theme', tweaks.theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Navbar onToggleTheme={toggleTheme} theme={tweaks.theme} />
      <main>
        <Hero copyIndex={tweaks.heroCopy} />
        <Products />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Ajustes RATEC">
        <TweakSection label="Tema" />
        <TweakRadio
          label="Modo"
          value={tweaks.theme}
          onChange={(v) => setTweak('theme', v)}
          options={[
            { value: 'dark', label: 'Escuro' },
            { value: 'light', label: 'Claro' },
          ]}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Densidade"
          value={tweaks.density}
          onChange={(v) => setTweak('density', v)}
          options={[
            { value: 'compact', label: 'Compacto' },
            { value: 'comfy', label: 'Padrão' },
            { value: 'spacious', label: 'Espaçoso' },
          ]}
        />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Variação de Copy"
          value={tweaks.heroCopy}
          onChange={(v) => setTweak('heroCopy', Number(v))}
          options={[
            { value: 0, label: 'Estúdio' },
            { value: 1, label: 'Produto' },
            { value: 2, label: 'BR' },
          ]}
        />
      </TweaksPanel>
    </>
  );
};

export default App;
