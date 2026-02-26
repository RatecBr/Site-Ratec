
import React from 'react';

const projects = [
  {
    title: 'Experiências Interativas',
    category: 'Realidade Aumentada',
    image: '/projeto1.jpg',
    link: 'https://universoaumentado.com/'
  },
  {
    title: 'Acessibilidade Audiovisual',
    category: 'Tecnologias Assistivas',
    image: '/projeto2.jpg',
    link: 'https://www.audiover.com.br/'
  },
  {
    title: 'Conteúdos Educativos',
    category: 'Recursos de IA Mídia',
    image: '/projeto3.jpg',
    link: 'https://www.tradulino.com/'
  },
  {
    title: 'Criação e gestao de sites ',
    category: 'Desenvolvimento Web',
    image: '/projeto4.jpg',
    link: 'https://www.alugueajuda.app/'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10 text-center md:text-left">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-12 bg-fuchsia-600"></div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 neon-glow-fuchsia">Destaque</span></h2>
            <p className="text-slate-400 max-w-xl font-light">Uma seleção rigorosa de infraestruturas inteligentes e experiências de elite que desenvolvemos.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-white/5 hover:border-fuchsia-500/50 transition-all duration-700 cursor-pointer bg-slate-900 min-h-[400px] rounded-2xl block"
            >
              <div className="absolute inset-0 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                  <p className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.2em]">{project.category}</p>
                </div>
                <h3 className="font-orbitron font-bold text-base leading-tight text-white mb-6 uppercase tracking-tight">{project.title}</h3>
                <div className="w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-lg font-orbitron rounded-lg text-center">
                  VER_PROJETO
                </div>
              </div>
              
              <div className="absolute top-4 left-4 text-[7px] font-mono text-white/30 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                ARCH_V{idx + 1}.0
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="group relative px-14 py-6 border border-fuchsia-500/30 text-fuchsia-400 font-black text-[10px] hover:text-white transition-all tracking-[0.4em] uppercase cursor-pointer rounded-xl overflow-hidden min-w-[280px]">
            <span className="relative z-10">EXPLORAR_PORTFÓLIO_TOTAL</span>
            <div className="absolute inset-0 bg-fuchsia-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
