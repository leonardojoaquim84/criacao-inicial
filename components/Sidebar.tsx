
import React from 'react';
import { Category } from '../types';
import { DEFAULT_CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <i className="fa-solid fa-link text-xl"></i>
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">WorkFlow</h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {DEFAULT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeCategory === cat.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 ${
                activeCategory === cat.id ? 'bg-indigo-100' : 'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                <i className={`fa-solid ${cat.icon} ${cat.color}`}></i>
              </span>
              <span className="font-medium">{cat.name}</span>
              {activeCategory === cat.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Dica Pro</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Use tags para agrupar links de projetos diferentes.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
