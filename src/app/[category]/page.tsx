import { type Metadata } from 'next';

import { CategoryClientPage } from './components/client-page';

type CategoryPageProps = {
	readonly params: Promise<{ category: string}>;
};

export async function generateMetadata(
	{ params }: CategoryPageProps,
): Promise<Metadata> {
	const { category } = await params || {}
	const categoryName = decodeURIComponent(category);
	return {
		title: `Notícias sobre ${categoryName} | NewsHub`,
		description: `Veja as últimas notícias sobre ${categoryName} no NewsHub.`,
	};
}

export default async function  CategoryPage({ params }: CategoryPageProps) {
	const { category } = await params || {}
	return <CategoryClientPage category={decodeURIComponent(category)} />;
}
