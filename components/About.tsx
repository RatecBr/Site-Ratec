
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            {/* Futuristic Graphic */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-cyan-500/20 rounded-none animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-dashed border-fuchsia-500/20 rounded-none animate-[spin_20s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 group overflow-hidden">
                  <img 
                    src="/robo.png" 
                    alt="RATEC Tech Core" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] text-cyan-400 tracking-[0.3em] uppercase">SYSTEM_CORE_INIT_OK</div>
                </div>
              </div>
              
              {/* HUD Markers */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Arquitetura <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 neon-glow-fuchsia">De Elite</span>
            </h2>
            <p className="text-slate-200 leading-relaxed font-light text-lg">
              A RATEC não é apenas uma empresa de tecnologia. Somos um ateliê de engenharia digital especializado em negócios que pensam, aprendem e escalam. 
            </p>
            <p className="text-slate-300 leading-relaxed font-light">
              Nossa missão é clara: incorporar inteligência de última geração no DNA das empresas, eliminando a fricção operacional e maximizando o ROI tecnológico.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-slate-900/50 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/30 group-hover:bg-cyan-500 transition-colors"></div>
                <h4 className="font-orbitron text-4xl font-black text-cyan-400">10+</h4>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] mt-2 font-bold font-mono">Arquitetos_IA</p>
              </div>
              <div className="p-6 bg-slate-900/50 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500/30 group-hover:bg-fuchsia-500 transition-colors"></div>
                <h4 className="font-orbitron text-4xl font-black text-fuchsia-400 font-mono">50+</h4>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] mt-2 font-bold font-mono">Nodes_Operacionais</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section (Trusted By) */}
        <div className="border-y border-white/5 py-16 bg-slate-950/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          <p className="text-center font-orbitron text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-12">Protocolos Ativos Com_Parceiros Global</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale opacity-40 hover:opacity-100 transition-opacity">
            {['TECH_CORP', 'NEURAL_LINK', 'FINANCE_HUB', 'QUANTUM_SYS', 'DATA_FLOW'].map((partner) => (
              <span key={partner} className="font-orbitron text-lg font-black text-white tracking-widest hover:text-cyan-400 transition-colors cursor-default select-none uppercase">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
