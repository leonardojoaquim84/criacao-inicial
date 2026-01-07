
import React from 'react';
import { LinkItem } from '../types.ts';

interface LinkButtonProps {
  link: LinkItem;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <div className="relative group">
      {/* 3D Depth Layer */}
      <div className="absolute inset-0 bg-slate-200 rounded-xl translate-y-1 group-hover:translate-y-1.5 transition-transform duration-200" />
      
      {/* Main Button Surface */}
      <a 
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-full px-4 py-4 bg-white border border-slate-200 rounded-xl 
                   transform transition-all duration-300 ease-out
                   group-hover:-translate-y-1.5 group-hover:scale-105 group-active:translate-y-0.5 group-active:scale-100
                   hover:border-blue-300 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/50
                   shadow-sm hover:shadow-md hover:shadow-blue-200/50 text-center"
      >
        <h3 className="font-extrabold text-slate-600 text-[11px] sm:text-xs truncate 
                       group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-none">
          {link.title}
        </h3>
      </a>
    </div>
  );
};

export default LinkButton;
