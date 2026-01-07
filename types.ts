
export interface LinkItem {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  tags: string[];
  createdAt: number;
  isFavorite: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}
