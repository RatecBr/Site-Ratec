
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-24 border-t border-white/5 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-fuchsia-600/5 blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center gap-5 group cursor-pointer group">
              <Logo className="w-12 h-12 transition-transform group-hover:rotate-12" />
              <div className="flex flex-col">
                <span className="font-orbitron font-black text-2xl leading-none tracking-tighter text-white neon-glow-cyan">RATEC</span>
                <span className="font-orbitron text-[9px] leading-none tracking-[0.5em] text-fuchsia-400 font-bold uppercase">Alpha_Systems_Core</span>
              </div>
            </div>
            <p className="text-slate-200 max-w-sm font-light leading-relaxed text-sm">
              Redefinindo a fronteira da inteligência artificial aplicada, desenvolvendo soluções criativas para uma nova economia.
            </p>
            <div className="flex gap-5">
              <a href="https://api.whatsapp.com/send/?phone=5562981173666&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+AUDIOVER&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-900 border border-white/5 rounded-none flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 transition-all group relative">
                <div className="w-1 h-1 bg-cyan-400 absolute top-0 left-0"></div>
                <div className="absolute inset-0 bg-fuchsia-600/10 -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <i className="fab fa-whatsapp text-slate-500 group-hover:text-white relative z-10 text-lg"></i>
              </a>
              <a href="https://www.instagram.com/ra.tec.br/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-900 border border-white/5 rounded-none flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 transition-all group relative">
                <div className="w-1 h-1 bg-cyan-400 absolute top-0 left-0"></div>
                <div className="absolute inset-0 bg-fuchsia-600/10 -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <i className="fab fa-instagram text-slate-500 group-hover:text-white relative z-10 text-lg"></i>
              </a>
              <a href="https://www.youtube.com/@ra.tec.brasil" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-900 border border-white/5 rounded-none flex items-center justify-center hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 transition-all group relative">
                <div className="w-1 h-1 bg-cyan-400 absolute top-0 left-0"></div>
                <div className="absolute inset-0 bg-fuchsia-600/10 -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <i className="fab fa-youtube text-slate-500 group-hover:text-white relative z-10 text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron text-[10px] font-black text-white mb-10 uppercase tracking-[0.5em] border-l-2 border-fuchsia-600 pl-4">Navegação_OS</h4>
            <ul className="space-y-5 text-slate-500 text-[10px] font-black tracking-widest uppercase">
              <li><a href="#solucoes" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-3"><span>[01]</span> SOLUÇÕES_NET</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-3"><span>[02]</span> PORTFÓLIO_REPO</a></li>
              <li><a href="#quem-somos" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-3"><span>[03]</span> QUEM_SOMOS_LOG</a></li>
              <li><a href="#contato" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-3"><span>[04]</span> CORE_CONTACT_TTY</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-[10px] font-black text-white mb-10 uppercase tracking-[0.5em] border-l-2 border-cyan-500 pl-4">Terminal_Uplink</h4>
            <ul className="space-y-5 text-slate-400 text-[10px] font-black tracking-widest uppercase">
              <li className="flex items-center gap-3"><span className="text-fuchsia-500/60">MAIL_SRV:</span> ra.tec.brasil@gmail.com</li>
              <li className="flex items-center gap-3"><span className="text-fuchsia-500/60">VOICE_OS:</span> +55 (62) 98117-3666</li>
              <li className="flex items-center gap-3"><span className="text-fuchsia-500/60">GEO_LOC:</span> GOIANIA_BR</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono tracking-[0.3em] text-slate-600 uppercase font-bold">
          <p>© 2026 RATEC // PROTOCOLO_FINAL_RESERVADO_SECURITY_LOCKED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-fuchsia-500 transition-colors">POLÍTICA_ROOT</a>
            <a href="#" className="hover:text-fuchsia-500 transition-colors">TERMOS_CMD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
