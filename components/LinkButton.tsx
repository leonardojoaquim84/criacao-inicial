
import React from 'react';
import { LinkItem } from '../types.ts';

interface LinkButtonProps {
  link: LinkItem;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  };

  const domain = getDomain(link.url);

  return (
    <div className="relative group h-full">
      {/* 3D Depth Layer */}
      <div className="absolute inset-0 bg-slate-200 rounded-xl translate-y-1 group-hover:translate-y-1.5 transition-transform duration-200" />
      
      {/* Main Button Surface */}
      <a 
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center h-full w-full px-3 py-4 bg-white border border-slate-200 rounded-xl 
                   transform transition-all duration-300 ease-out
                   group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-active:translate-y-0.5 group-active:scale-100
                   hover:border-blue-300 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/50
                   shadow-sm hover:shadow-md hover:shadow-blue-200/50"
      >
        <div className="flex items-center w-full gap-2.5">
          {domain && (
            <img 
              src={`https://www.google.com/s2/favicons?sz=32&domain=${domain}`}
              alt=""
              className="w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          )}
          <h3 className="font-extrabold text-slate-600 text-[10px] sm:text-[11px] 
                         group-hover:text-blue-700 transition-colors uppercase tracking-wider leading-tight text-left break-words">
            {link.title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default LinkButton;
