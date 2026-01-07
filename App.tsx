
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import LinkCard from './components/LinkCard';
import AddLinkModal from './components/AddLinkModal';
import { LinkItem, AppStatus } from './types';
import { INITIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize data
  useEffect(() => {
    const saved = localStorage.getItem('workflow_links');
    if (saved) {
      setLinks(JSON.parse(saved));
    } else {
      setLinks(INITIAL_LINKS as LinkItem[]);
    }
  }, []);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('workflow_links', JSON.stringify(links));
  }, [links]);

  const filteredLinks = useMemo(() => {
    return links.filter(link => {
      const matchesCategory = activeCategory === 'all' 
        ? true 
        : activeCategory === 'favorites' 
          ? link.isFavorite 
          : link.category === activeCategory;
      
      const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           link.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    }).sort((a, b) => b.createdAt - a.createdAt);
  }, [links, activeCategory, searchQuery]);

  const handleAddLink = (linkData: Partial<LinkItem>) => {
    const newLink: LinkItem = {
      id: crypto.randomUUID(),
      ...linkData
    } as LinkItem;
    setLinks(prev => [newLink, ...prev]);
  };

  const handleToggleFavorite = (id: string) => {
    setLinks(prev => prev.map(l => l.id === id ? { ...l, isFavorite: !l.isFavorite } : l));
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={(id) => {
          setActiveCategory(id);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
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
                  placeholder="Pesquisar por título, URL ou tags..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-sm text-slate-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Logo replacement for Add Link Button */}
            <div className="flex items-center space-x-3 select-none">
              <div className="hidden sm:flex items-center space-x-2">
                <div className="h-8 w-[2px] bg-slate-200 mx-2"></div>
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                   <i className="fa-solid fa-link text-blue-600 text-sm"></i>
                   <span className="text-blue-700 font-black text-sm tracking-tighter uppercase">Azul Links</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 capitalize tracking-tight">
                  {activeCategory === 'all' ? 'Seu Dashboard' : activeCategory.replace(/_/g, ' ')}
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  {filteredLinks.length} {filteredLinks.length === 1 ? 'link organizado' : 'links organizados'}
                </p>
              </div>
              
              <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
                <button className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 rounded-lg transition-colors">
                  <i className="fa-solid fa-grid-2"></i>
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 rounded-lg transition-colors ml-1">
                  <i className="fa-solid fa-list"></i>
                </button>
              </div>
            </div>

            {filteredLinks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredLinks.map((link) => (
                  <LinkCard 
                    key={link.id} 
                    link={link} 
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6 shadow-inner">
                  <i className="fa-solid fa-folder-open text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Nada por aqui ainda</h3>
                <p className="text-slate-500 max-w-sm">
                  {searchQuery 
                    ? `Não encontramos resultados para "${searchQuery}"` 
                    : "Os links importantes aparecerão aqui conforme forem adicionados."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal only accessible via manual state change or hidden dev trigger if needed */}
      {isModalOpen && (
        <AddLinkModal 
          onClose={() => setIsModalOpen(false)} 
          onAdd={handleAddLink}
        />
      )}
    </div>
  );
};

export default App;
