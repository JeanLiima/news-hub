import { useEffect, useState, useCallback } from 'react';
import type { Article } from '@/types/article';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Article[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = useCallback((article: Article) => {
    const exists = favorites.some(f => f.url === article.url);
    const updated = exists
      ? favorites.filter(f => f.url !== article.url)
      : [...favorites, article];

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  }, [favorites]);

  return { favorites, toggleFavorite };
};