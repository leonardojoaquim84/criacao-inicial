
import React from 'react';

interface ImageOverlayProps {
  url: string;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ url, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/20 active:scale-90"
      >
        <i className="fa-solid fa-xmark text-xl"></i>
      </button>

      <div className="w-full h-full p-4 md:p-10 flex items-center justify-center">
        <img 
          src={url} 
          alt="Preview" 
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      
      <p className="absolute bottom-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none">
        Toque fora da imagem para fechar
      </p>
    </div>
  );
};

export default ImageOverlay;
