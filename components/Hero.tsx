
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden scanlines">
      {/* Background Effects */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12 relative z-[100] text-center lg:text-left bg-slate-950/40 backdrop-blur-md lg:backdrop-blur-none p-10 lg:p-0 rounded-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-[10px] font-black tracking-[0.4em] uppercase animate-flicker">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#d946ef] animate-pulse"></span>
            TRANSFORMAÇÃO_DIGITAL_LOADING...
          </div>
          <h1 className="font-orbitron text-5xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter uppercase relative">
            Sistemas <br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(217,70,239,1)] neon-glow-fuchsia">Inteligentes</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed font-light mx-auto lg:mx-0 drop-shadow-md">
            Integrações com <span className="text-fuchsia-300 font-bold drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]">Inteligência Artificial</span>, Sistemas Web e Desenvolvimento de APPs para líderes.
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <a 
              href="#portfolio" 
              className="group relative px-14 py-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-black transition-all cursor-pointer overflow-hidden shadow-[0_0_40px_rgba(217,70,239,0.5)] hover:shadow-[0_0_70px_rgba(217,70,239,0.8)] border-none active:scale-95 rounded-xl block text-center"
            >
              <span className="relative z-10 font-orbitron text-[10px] tracking-[0.4em]">NOSSO_PORTFÓLIO</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5562981173666&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+AUDIOVER&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-14 py-6 border-2 border-fuchsia-500/50 hover:border-fuchsia-400 bg-fuchsia-500/10 text-white font-black transition-all backdrop-blur-sm cursor-pointer font-orbitron text-[10px] tracking-[0.4em] active:scale-95 rounded-xl shadow-[0_0_20px_rgba(217,70,239,0.2)] block text-center"
            >
              CONSULTORIA_IA
            </a>
          </div>
          
          <div className="flex items-center gap-12 pt-10 border-t border-white/5 justify-center lg:justify-start">
            {[
              { label: 'Projetos_IA', value: '50+' },
              { label: 'Otimização_Net', value: '+300%' },
              { label: 'Precisão_Core', value: '99.9%' }
            ].map((stat) => (
              <div key={stat.label} className="relative z-10">
                <p className="text-2xl font-orbitron font-black text-white tracking-tighter">{stat.value}</p>
                <p className="text-[8px] text-slate-400 uppercase tracking-[0.3em] font-bold mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group lg:block hidden z-0">
          {/* Decorative Corner Brackets */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-fuchsia-500 z-20"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-cyan-400 z-20"></div>

          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-slate-900 group-hover:border-fuchsia-500/20 transition-all duration-700">
            <img 
              src="/hero-banner.png" 
              alt="RATEC Tecnologia IA" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
            
            {/* HUD Overlay Elements */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="text-[9px] font-mono text-fuchsia-400 space-y-2 tracking-[0.2em] font-black uppercase">
                  <p>SYS_STATUS: OPTIMAL</p>
                  <p>NEURAL_CORE: 98.4%</p>
                </div>
                <div className="w-20 h-[1px] bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="w-40 h-1 relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-y-0 left-0 bg-fuchsia-400 w-3/4 animate-pulse"></div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-cyan-400 font-black tracking-widest uppercase">LAT_LOCK: 23° 33' S</p>
                  <p className="text-[10px] font-mono text-fuchsia-400 font-black tracking-widest uppercase">LNG_LOCK: 46° 38' W</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
