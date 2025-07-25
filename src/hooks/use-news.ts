import { useState, useEffect } from 'react';
import type { Article } from '@/types/article';

interface Filters {
  source?: string;
  date?: string;
}

export const useNews = (category: string, filters: Filters) => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        query.set('category', category);
        if (filters.source) query.set('source', filters.source);
        if (filters.date) query.set('date', filters.date);

        const res = await fetch(`/api/news?${query.toString()}`);
        const data = await res.json();
        setNews(data.articles ?? []);
      } catch {
            setError('Erro ao buscar notícias');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, filters.source, filters.date]);

  return { news, loading, error };
};
