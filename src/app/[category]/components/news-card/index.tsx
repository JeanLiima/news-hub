'use client';

import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { SocialShareButtons } from '../social-share-buttons';
import { Article } from '@/types/article';

type NewsCardProps = {
  readonly article: Article;
  readonly isFavorite: boolean;
  readonly onToggleFavorite: (article: Article) => void;
};

export function NewsCard({ article, isFavorite, onToggleFavorite }: NewsCardProps) {
  return (
    <article
      className="border border-border rounded bg-card-bg p-5 shadow flex flex-col justify-between transition hover:shadow-lg"
      style={{
        backgroundColor: 'var(--color-card-bg)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-foreground)',
      }}
    >
      <div>
        <h2 className="text-lg font-bold mb-2">{article.title}</h2>
        <p className="text-sm text-secondary line-clamp-3">{article.description}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
          style={{ color: 'var(--color-primary)' }}
        >
          Ler mais
        </a>

        <button
          onClick={() => onToggleFavorite(article)}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          className="text-yellow-400 text-xl hover:text-yellow-500 transition"
        >
          {isFavorite ? <FaStar /> : <FaRegStar />}
        </button>
      </div>

      <div className="mt-3">
        <SocialShareButtons url={article.url} title={article.title} />
      </div>
    </article>
  );
}
