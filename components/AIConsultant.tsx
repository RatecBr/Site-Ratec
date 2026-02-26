
import React, { useState, useRef, useEffect } from 'react';
import { getConsultantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Sou o consultor de IA da RATEC. Como posso ajudar a automatizar e escalar seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getConsultantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="consultor-ia" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="font-orbitron text-4xl font-black mb-4 tracking-tighter">Consultor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 neon-glow-cyan uppercase">Técnico_IA</span></h2>
            <p className="text-slate-200 font-mono text-xs uppercase tracking-[0.5em] font-bold">Iniciando protocolo de consulta estratégica_v4.0</p>
          </div>

          <div className="relative group">
            {/* HUD Corner Decor */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-500 z-20"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500 z-20"></div>

            <div className="bg-slate-900/90 backdrop-blur-3xl border border-white/5 rounded-none overflow-hidden flex flex-col h-[650px] shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              {/* Header / HUD OS Bar */}
              <div className="bg-slate-950 p-5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                  </div>
                  <div className="h-5 w-[1px] bg-white/10 mx-2"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                    <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 font-black">RATEC_OS_STABLE_4.0.1</span>
                  </div>
                </div>
                <div className="hidden sm:block text-[9px] font-mono text-slate-600 tracking-[0.2em] uppercase font-bold text-right">CPU: 08% | NET: SECURE</div>
              </div>

              {/* Chat Area / Output Console */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <div className="text-[10px] font-mono text-slate-700 mb-10 border-b border-white/5 pb-4 uppercase tracking-widest font-black">
                  <p>LOGIN: {new Date().toLocaleDateString()} // HOST: TTY1</p>
                  <p className="mt-1 text-cyan-600">CONNECTION_SECURED via NEURAL_COMPUTE_ENGINE_V2</p>
                </div>

                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                    <div className={`relative max-w-[90%] lg:max-w-[75%] p-6 font-mono text-xs leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-fuchsia-600/10 border border-fuchsia-500/30 text-fuchsia-50 rounded-lg rounded-tr-none' 
                        : 'bg-slate-950/80 border border-cyan-500/20 text-cyan-50 rounded-lg rounded-tl-none shadow-xl'
                    }`}>
                      {msg.role === 'assistant' && (
                        <div className="absolute -top-3 left-0 px-3 py-1 bg-slate-950 border border-cyan-500/30 text-[9px] font-black text-cyan-400 uppercase tracking-[0.2em]">
                          RATEC_CONSULTOR
                        </div>
                      )}
                      {msg.role === 'user' && (
                        <div className="absolute -top-3 right-0 px-3 py-1 bg-slate-950 border border-fuchsia-500/30 text-[9px] font-black text-fuchsia-400 uppercase tracking-[0.2em]">
                          USR_ADMIN
                        </div>
                      )}
                      <div className="flex gap-3">
                        {msg.role === 'assistant' && <span className="text-cyan-500 font-black opacity-50 shrink-0">$</span>}
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-950/60 border border-cyan-500/30 p-5 rounded-lg rounded-tl-none">
                      <div className="flex gap-4 items-center">
                        <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.4em] animate-pulse font-black">Decrypting_Engine...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area / Command Line */}
              <form onSubmit={handleSubmit} className="p-8 bg-slate-950 border-t border-white/5 relative">
                <div className="flex items-center gap-6 group">
                  <span className="text-cyan-400 font-mono font-black text-lg animate-pulse">{'>'}</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="DIGITE SEU COMANDO OU PERGUNTA PARA O CORE..."
                    className="flex-1 bg-transparent border-none text-cyan-50 font-mono text-sm focus:ring-0 placeholder:text-slate-800 tracking-[0.1em] uppercase h-12"
                    disabled={isLoading}
                    autoFocus
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-10 h-14 bg-cyan-600/10 hover:bg-fuchsia-600 hover:text-white border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] transition-all cursor-pointer disabled:opacity-30 group shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                  >
                    EXECUTAR_CMD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
