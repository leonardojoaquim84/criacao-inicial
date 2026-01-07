
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface AnalysisResult {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export const analyzeLink = async (url: string, title?: string): Promise<AnalysisResult> => {
  const model = 'gemini-3-flash-preview';
  
  const prompt = `Analise este link de trabalho: URL: ${url} ${title ? `(Título sugerido: ${title})` : ''}. 
  Forneça uma categorização profissional e uma breve descrição em português. 
  Escolha a categoria mais adequada EXCLUSIVAMENTE entre: dia_a_dia, treinamento, passe_livre, consultas, other.
  
  Significado das categorias:
  - dia_a_dia: Ferramentas de uso diário, e-mail, planilhas de rotina.
  - treinamento: Materiais de estudo, cursos, manuais, onboarding.
  - passe_livre: Acessos gerais, portais de benefícios, holerites.
  - consultas: Dashboards, relatórios, busca de dados, sistemas de consulta.
  - other: Outros links que não se encaixam acima.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: 'Um título conciso e profissional.' },
            category: { type: Type.STRING, description: 'Uma das categorias: dia_a_dia, treinamento, passe_livre, consultas, other.' },
            description: { type: Type.STRING, description: 'Uma breve frase sobre o que é o link.' },
            tags: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: '3 a 5 tags curtas relacionadas.'
            }
          },
          required: ['title', 'category', 'description', 'tags']
        }
      }
    });

    const result = JSON.parse(response.text.trim());
    return result;
  } catch (error) {
    console.error("Gemini analysis failed", error);
    return {
      title: title || url,
      category: 'other',
      description: 'Link adicionado manualmente.',
      tags: []
    };
  }
};
