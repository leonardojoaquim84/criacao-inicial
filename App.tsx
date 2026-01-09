
import { GoogleGenAI } from "@google/genai";
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar.tsx';
import LinkButton from './components/LinkButton.tsx';
import AddLinkModal from './components/AddLinkModal.tsx';
import { LinkItem } from './types.ts';
import { INITIAL_LINKS, DEFAULT_CATEGORIES } from './constants.ts';

const App: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem('workflow_links');
    if (saved) {
      setLinks(JSON.parse(saved));
    } else {
      setLinks(INITIAL_LINKS as LinkItem[]);
    }

    // Lógica de contador de visitantes
    const storedCount = localStorage.getItem('visitor_count');
    const newCount = (storedCount ? parseInt(storedCount, 10) : 0) + 1;
    localStorage.setItem('visitor_count', newCount.toString());
    setVisitorCount(newCount);

    // Timer para atualizar data/hora
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('workflow_links', JSON.stringify(links));
  }, [links]);

  const displayLinks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    return links.filter(link => {
      const matchesSearch = !query || 
                           link.title.toLowerCase().includes(query) || 
                           link.url.toLowerCase().includes(query) ||
                           link.tags.some(t => t.toLowerCase().includes(query));
      
      if (query) return matchesSearch;
      return activeCategory ? link.category === activeCategory : false;
    }).sort((a, b) => b.createdAt - a.createdAt);
  }, [links, activeCategory, searchQuery]);

  const currentCategory = useMemo(() => {
    return DEFAULT_CATEGORIES.find(c => c.id === activeCategory);
  }, [activeCategory]);

  const isSearching = searchQuery.trim().length > 0;

  const formattedDateTime = useMemo(() => {
    const date = currentTime.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    const time = currentTime.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return `${date} • ${time}`;
  }, [currentTime]);

  const handleGoHome = () => {
    setActiveCategory(null);
    setSearchQuery('');
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900 font-inter">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeCategory={activeCategory || ''} 
        onSelectCategory={(id) => {
          setActiveCategory(id);
          setIsSidebarOpen(false);
          setSearchQuery('');
        }}
        onGoHome={handleGoHome}
        isOpen={isSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 lg:hidden text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <i className="fa-solid fa-bars-staggered text-xl"></i>
            </button>

            <div className="flex-1 max-w-xl">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <i className="fa-solid fa-magnifying-glass text-sm"></i>
                </div>
                <input
                  type="text"
                  placeholder="Pesquisar em todos os links..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-sm text-slate-800 placeholder:text-slate-400 shadow-inner"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 select-none">
              <button 
                onClick={handleGoHome}
                className="hidden sm:flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-white hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95"
              >
                 <i className="fa-solid fa-house text-xs"></i>
                 <span className="font-black text-[10px] tracking-widest uppercase">Início</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-14 flex flex-col items-center justify-start">
          <div className="max-w-7xl w-full">
            
            {(!activeCategory && !isSearching) ? (
              <div className="animate-in fade-in text-center">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-1">Painel Azul</h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">{formattedDateTime}</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {DEFAULT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className="relative group aspect-square max-w-[180px] mx-auto w-full flex flex-col items-center justify-center bg-white rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                    >
                      <div className={`absolute -right-2 -bottom-2 opacity-[0.03] transition-transform duration-500 group-hover:scale-125 ${cat.color}`}>
                        <i className={`fa-solid ${cat.icon} text-6xl`}></i>
                      </div>
                      <div className={`w-14 h-14 rounded-2xl mb-3 flex items-center justify-center text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${
                        cat.id === 'dia_a_dia' ? 'bg-blue-50 text-blue-600' : 
                        cat.id === 'treinamento' ? 'bg-emerald-50 text-emerald-600' :
                        cat.id === 'passe_livre' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        <i className={`fa-solid ${cat.icon}`}></i>
                      </div>
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-tighter">{cat.name}</h3>
                    </button>
                  ))}
                </div>

                <div className="mt-20 opacity-30 select-none">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                    Visitante nº {visitorCount}
                  </p>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in h-full relative">
                {/* Header da Página com Botão à Direita */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                     <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${
                        isSearching ? 'from-slate-400 to-slate-600' :
                        currentCategory?.id === 'dia_a_dia' ? 'from-blue-400 to-blue-600' : 
                        currentCategory?.id === 'treinamento' ? 'from-emerald-400 to-emerald-600' :
                        currentCategory?.id === 'passe_livre' ? 'from-purple-400 to-purple-600' : 'from-amber-400 to-amber-600'
                     }`}></div>
                     <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                       {isSearching ? 'Busca' : currentCategory?.name}
                     </h2>
                  </div>

                  <button 
                    onClick={handleGoHome}
                    className="group flex items-center space-x-2 px-4 py-2 bg-transparent text-slate-400 hover:text-blue-600 transition-all text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    <i className="fa-solid fa-chevron-left text-[8px] group-hover:-translate-x-1 transition-transform"></i>
                    <span>Voltar ao Início</span>
                  </button>
                </div>

                {displayLinks.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
                    {displayLinks.map((link) => (
                      <LinkButton 
                        key={link.id} 
                        link={link} 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 w-full">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                      <i className="fa-solid fa-magnifying-glass text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-tighter">
                        {isSearching ? 'Nenhum Resultado' : 'Vazio'}
                    </h3>
                    <p className="text-slate-400 max-w-xs text-[11px] font-bold uppercase tracking-wider">
                      {isSearching 
                        ? `Não encontramos nada para "${searchQuery}".` 
                        : "Nenhum link nesta categoria ainda."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <AddLinkModal 
          onClose={() => setIsModalOpen(false)} 
          onAdd={(linkData) => setLinks(prev => [{ id: crypto.randomUUID(), ...linkData }, ...prev])}
        />
      )}
    </div>
  );
};

export default App;
