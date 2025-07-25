'use client';

import { useState } from 'react';
import { useNews } from '@/hooks/use-news';
import { useFavorites } from '@/hooks/use-favorites';

import { FilterForm } from '../filter-form';
import { NewsCard } from '../news-card';

type CategoryClientPageProps = {
	readonly category: string;
};

export function CategoryClientPage({ category }: CategoryClientPageProps) {
	const [filters, setFilters] = useState<{ source?: string; date?: string }>({});

	const { news, loading, error } = useNews(category, filters);
	const { favorites, toggleFavorite } = useFavorites();

	if (loading) return <p className="text-center p-4">Carregando...</p>;
	if (error) return <p className="text-center p-4 text-error">{error}</p>;

	return (
		<div
			className="p-6 max-w-7xl mx-auto space-y-6"
			style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
		>
			<FilterForm onSubmit={setFilters} />

			{news.length === 0 && <p className="text-center text-secondary">Nenhuma notícia encontrada.</p>}

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{news.map(article => {
					const isFavorite = favorites.some(fav => fav.url === article.url);
					return (
						<NewsCard
							key={article.url}
							article={article}
							isFavorite={isFavorite}
							onToggleFavorite={toggleFavorite}
						/>
					);
				})}
			</div>
		</div>
	);
}
