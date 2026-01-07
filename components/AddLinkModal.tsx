
import React, { useState } from 'react';
import { analyzeLink } from '../services/geminiService';
import { AppStatus } from '../types';

interface AddLinkModalProps {
  onClose: () => void;
  onAdd: (linkData: any) => void;
}

const AddLinkModal: React.FC<AddLinkModalProps> = ({ onClose, onAdd }) => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus(AppStatus.LOADING);
    setError('');

    try {
      const analysis = await analyzeLink(url);
      onAdd({
        url,
        ...analysis,
        createdAt: Date.now(),
        isFavorite: false
      });
      onClose();
    } catch (err) {
      setError('Falha ao analisar o link. Tente novamente.');
      setStatus(AppStatus.ERROR);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Novo Link</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                URL do Link
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <i className="fa-solid fa-link"></i>
                </div>
                <input
                  type="url"
                  required
                  placeholder="https://sua-ferramenta.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={status === AppStatus.LOADING}
                />
              </div>
            </div>

            {error && <p className="text-rose-500 text-sm font-medium">{error}</p>}

            <div className="bg-blue-50 p-4 rounded-2xl flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <p className="text-xs text-blue-700 leading-relaxed font-medium">
                Nossa IA irá detectar automaticamente o título, categoria e descrição para manter sua biblioteca organizada.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === AppStatus.LOADING}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg flex items-center justify-center ${
                status === AppStatus.LOADING 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
              }`}
            >
              {status === AppStatus.LOADING ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin mr-3"></i>
                  Analisando Link...
                </>
              ) : (
                'Salvar Link'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLinkModal;
