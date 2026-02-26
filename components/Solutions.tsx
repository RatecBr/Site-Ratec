
import React from 'react';

const solutions = [
  {
    title: 'Inteligência Artificial',
    description: 'Implementação de APPs com agentes de IA para alavancar resultados e melhorar a tomada de decisão.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    title: 'Processos Ágeis',
    description: 'Sistemas inteligentes que trabalham por você, eliminando tarefas repetitivas e aumentando a escala do seu negócio.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: 'Desenvolvimento Web',
    description: 'Aplicações web de alta performance com as tecnologias mais modernas do mercado, focadas em UX e conversão.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-pink-500 to-fuchsia-500'
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/5 font-orbitron select-none -z-10">MATRIX</div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 tracking-tight">Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 neon-glow">Soluções</span></h2>
          <p className="text-slate-200 max-w-2xl mx-auto font-light">Tecnologia de ponta para transformar a maneira como sua empresa opera no mundo digital através de inteligência aplicada.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:border-fuchsia-500/40 hover:-translate-y-2 overflow-hidden cursor-pointer shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${idx % 2 === 0 ? 'from-fuchsia-500 to-fuchsia-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center text-white mb-8 shadow-[0_8px_30px_rgba(217,70,239,0.3)] group-hover:shadow-[0_8px_40px_rgba(217,70,239,0.6)] transition-all duration-500`}>
                {sol.icon}
              </div>
              
              <h3 className="font-orbitron text-xl font-bold mb-4 group-hover:text-fuchsia-400 transition-colors tracking-wide uppercase">{sol.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light mb-8">
                {sol.description}
              </p>
              
              <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] transition-all group-hover:translate-x-2">
                - CONECTION_ROOT 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
