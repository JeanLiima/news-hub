'use client';
import Link from 'next/link';

const categories = [
  'general', 'business', 'entertainment',
  'health', 'science', 'sports', 'technology'
];

export default function Home() {
  return (
    <main
      className="p-8 max-w-4xl mx-auto"
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
    >
      <h1 className="text-3xl font-bold mb-6">Agregador de Notícias</h1>
      <p className="mb-6 text-secondary">Escolha uma categoria para visualizar as principais notícias.</p>

      <nav aria-label="Categorias de notícias">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map(cat => (
            <li key={cat}>
              <Link
                href={`/${cat}`}
                className="block p-4 rounded shadow text-white bg-primary hover:bg-primary-hover transition text-center font-semibold"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
