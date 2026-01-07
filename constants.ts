
import { Category } from './types';

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos', icon: 'fa-layer-group', color: 'text-slate-600' },
  { id: 'favorites', name: 'Favoritos', icon: 'fa-star', color: 'text-amber-500' },
  { id: 'docs', name: 'Documentação', icon: 'fa-file-lines', color: 'text-blue-500' },
  { id: 'tools', name: 'Ferramentas', icon: 'fa-screwdriver-wrench', color: 'text-emerald-500' },
  { id: 'meeting', name: 'Reuniões', icon: 'fa-video', color: 'text-purple-500' },
  { id: 'learning', name: 'Aprendizado', icon: 'fa-graduation-cap', color: 'text-rose-500' },
  { id: 'other', name: 'Outros', icon: 'fa-ellipsis', color: 'text-slate-400' }
];

export const INITIAL_LINKS = [
  {
    id: '1',
    url: 'https://github.com',
    title: 'GitHub Repositories',
    category: 'tools',
    description: 'Central de controle de código e colaboração.',
    tags: ['dev', 'git'],
    createdAt: Date.now(),
    isFavorite: true
  },
  {
    id: '2',
    url: 'https://linear.app',
    title: 'Linear Task Manager',
    category: 'tools',
    description: 'Gestão de sprints e bugs do time.',
    tags: ['agile', 'task'],
    createdAt: Date.now() - 86400000,
    isFavorite: false
  }
];
