
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Portfolio />
      <AIConsultant />
      <About />
      
      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8 p-12 rounded-3xl border border-fuchsia-500/20 bg-glass shadow-[0_0_50px_rgba(217,70,239,0.1)]">
            <h2 className="font-orbitron text-4xl font-bold leading-tight">
              Pronto para levar sua marca para o <span className="text-fuchsia-400 neon-glow">Futuro?</span>
            </h2>
            <p className="text-slate-400">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar sua visão em uma solução inteligente de alto impacto.
            </p>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-full shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all transform hover:scale-105">
              FALE COM UM ESPECIALISTA
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
