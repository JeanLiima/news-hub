import { Metadata } from 'next';
import { CategoryClientPage } from './components/client-page';

type CategoryPageProps = {
	readonly params: { category: string };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
	const categoryName = decodeURIComponent(params.category);
	return {
		title: `Notícias sobre ${categoryName} | NewsHub`,
		description: `Veja as últimas notícias sobre ${categoryName} no NewsHub.`,
	};
}

export default function CategoryPage({ params }: CategoryPageProps) {
	return <CategoryClientPage category={decodeURIComponent(params.category)} />;
}
