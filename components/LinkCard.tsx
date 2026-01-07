
import React from 'react';
import { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, onDelete, onToggleFavorite }) => {
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-200 transition-all duration-300 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-indigo-100 transition-colors">
            <img 
              src={`https://www.google.com/s2/favicons?sz=64&domain=${getDomain(link.url)}`}
              alt="favicon"
              className="w-8 h-8 rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/32/32?blur=10';
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
              {link.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {getDomain(link.url)}
            </p>
          </div>
        </div>
        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onToggleFavorite(link.id)}
            className={`p-2 rounded-lg transition-colors ${link.isFavorite ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:bg-slate-100'}`}
          >
            <i className={`fa-${link.isFavorite ? 'solid' : 'regular'} fa-star`}></i>
          </button>
          <button 
            onClick={() => onDelete(link.id)}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed min-h-[40px]">
        {link.description || 'Sem descrição disponível.'}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {link.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-md tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2.5 bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200 border border-slate-100 group-hover:border-transparent"
      >
        Abrir Link
        <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px]"></i>
      </a>
    </div>
  );
};

export default LinkCard;
