
import React from 'react';
import { Category } from '../types';
import { DEFAULT_CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  onGoHome: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, onGoHome, isOpen }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <button 
          onClick={onGoHome}
          className="p-6 flex items-center space-x-3 group hover:bg-slate-50 transition-colors text-left"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
            <i className="fa-solid fa-link text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tighter leading-none">AZUL LINKS</h1>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">Navegação Central</p>
          </div>
        </button>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Departamentos</div>
          {DEFAULT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeCategory === cat.id
                  ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 shadow-inner ${
                activeCategory === cat.id ? 'bg-white' : 'bg-slate-50 group-hover:bg-slate-100'
              }`}>
                <i className={`fa-solid ${cat.icon} ${cat.color} text-xs`}></i>
              </span>
              <span className="font-bold text-xs uppercase tracking-wider">{cat.name}</span>
              {activeCategory === cat.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Workspace</p>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Sua curadoria oficial de ferramentas e acessos Azul.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
