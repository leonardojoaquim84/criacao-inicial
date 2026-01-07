
import { Category } from './types';

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos', icon: 'fa-layer-group', color: 'text-slate-600' },
  { id: 'favorites', name: 'Favoritos', icon: 'fa-star', color: 'text-amber-500' },
  { id: 'dia_a_dia', name: 'Dia a Dia', icon: 'fa-calendar-check', color: 'text-blue-500' },
  { id: 'treinamento', name: 'Treinamento', icon: 'fa-graduation-cap', color: 'text-emerald-500' },
  { id: 'passe_livre', name: 'Passe Livre', icon: 'fa-id-card', color: 'text-purple-500' },
  { id: 'consultas', name: 'Consultas', icon: 'fa-clipboard-question', color: 'text-amber-500' },
  { id: 'other', name: 'Outros', icon: 'fa-ellipsis', color: 'text-slate-400' }
];

export const INITIAL_LINKS = [
  {
    id: '1',
    url: 'https://docs.google.com',
    title: 'Planilhas de Controle',
    category: 'dia_a_dia',
    description: 'Acesso rápido às planilhas diárias de operação.',
    tags: ['rotina', 'google'],
    createdAt: Date.now(),
    isFavorite: true
  },
  {
    id: '2',
    url: 'https://learning.portal.com',
    title: 'Portal de Treinamento',
    category: 'treinamento',
    description: 'Cursos e certificações obrigatórias da empresa.',
    tags: ['capacitação', 'rh'],
    createdAt: Date.now() - 86400000,
    isFavorite: false
  }
];
