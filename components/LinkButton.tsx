
import React from 'react';
import { LinkItem } from '../types.ts';
import { notifyEvent } from '../services/notificationService.ts';

interface LinkButtonProps {
  link: LinkItem;
  onPreview?: (url: string) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, onPreview }) => {
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  };

  const domain = getDomain(link.url);

  const handleClick = (e: React.MouseEvent) => {
    notifyEvent(`🔗 Link acessado: **${link.title}** (${link.url})`);
    
    // Lista de IDs ou padrões de URL que devem abrir o preview em tela cheia
    const isImageLink = link.url.match(/\.(jpeg|jpg|gif|png|webp)(\?.*)?$/i) != null;
    const isSpecialPreview = link.id === 'ocupacao-aeronaves' || link.id === 'gig-x-sdu' || link.id === 'entretenimento-a-bordo';

    if (onPreview && (isSpecialPreview || isImageLink)) {
      e.preventDefault();
      onPreview(link.url);
    }
  };

  return (
    <div className="relative group h-full">
      {/* 3D Depth Layer */}
      <div className="absolute inset-0 bg-slate-200 rounded-xl translate-y-1 group-hover:translate-y-1.5 transition-transform duration-200" />
      
      {/* Main Button Surface */}
      <a 
        href={link.url}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center w-full min-h-[72px] px-4 py-4 bg-white border border-slate-200 rounded-xl 
                   transform transition-all duration-300 ease-out
                   group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-active:translate-y-0.5 group-active:scale-100
                   hover:border-blue-300 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/50
                   shadow-sm hover:shadow-md hover:shadow-blue-200/50"
      >
        <div className="flex items-center w-full gap-3">
          {/* Padronização do container do ícone */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-slate-50 rounded-md border border-slate-100 group-hover:border-blue-200 transition-colors">
            {domain ? (
              <img 
                src={`https://www.google.com/s2/favicons?sz=32&domain=${domain}`}
                alt=""
                className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            ) : (
              <i className="fa-solid fa-link text-[10px] text-slate-300"></i>
            )}
          </div>
          
          <h3 className="font-extrabold text-slate-600 text-[11px] sm:text-[12px] 
                         group-hover:text-blue-700 transition-colors uppercase tracking-wider leading-snug text-left break-words">
            {link.title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default LinkButton;
