
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o Consultor Especialista em Inovação da RATEC - Soluções Inteligentes. 
Sua missão é ajudar potenciais clientes a entenderem como a Inteligência Artificial (IA), Automação de Processos e Desenvolvimento de Elite podem impulsionar seus negócios.

Mantenha um tom profissional, futurista e altamente técnico, porém acessível. 
Nossos principais serviços são:
1. Inteligência Artificial (LLMs, Agentes Inteligentes, Chatbots Avançados) - Automatizam o atendimento e a tomada de decisão.
2. Automação de Processos - Sistemas que eliminam tarefas repetitivas e aumentam a escala operacional.
3. Desenvolvimento Web de Elite - Aplicações de alta performance com foco em conversão e UX moderna.
4. Consultoria Tecnológica - Planejamento estratégico para transformação digital.

Ao responder, sugira sempre a melhor solução baseada no problema do cliente e explique brevemente os benefícios em termos de ROI e eficiência.
Seja conciso. Use Markdown para formatação.
`;

export async function getConsultantResponse(prompt: string) {
  // Use any to bypass Vite environment type issues in some TS configs
  const env = (import.meta as any).env;
  const apiKey = env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return "O sistema de IA ainda não foi configurado com uma chave de acesso válida. Por favor, verifique o arquivo .env.";
  }

  const client = new GoogleGenAI({ apiKey });
  
  try {
    const response = await client.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    } as any);

    return response.text || "Desculpe, tive um problema ao processar sua solicitação. Tente novamente em instantes.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro na conexão com meu núcleo de IA. Por favor, tente novamente mais tarde.";
  }
}
