import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category') ?? 'general';
  const source = searchParams.get('source');
  const date = searchParams.get('date');

  const useEverythingEndpoint = Boolean(date);

  const baseUrl = useEverythingEndpoint
    ? 'https://newsapi.org/v2/everything'
    : 'https://newsapi.org/v2/top-headlines';

  const url = new URL(baseUrl);
  url.searchParams.set('apiKey', process.env.NEWS_API_KEY!);

  if (useEverythingEndpoint) {
    if (date) {
      url.searchParams.set('from', date);
      url.searchParams.set('to', date);
    }
    if (category && category !== 'general') {
      url.searchParams.set('q', category);
    }
    if (source) url.searchParams.set('domains', source);
    url.searchParams.set('sortBy', 'publishedAt');
  } else {
    url.searchParams.set('country', 'us');
    if (category) url.searchParams.set('category', category);
    if (source) url.searchParams.set('sources', source);
  }

  const res = await fetch(url.toString());
  const data = await res.json();

  return NextResponse.json(data);
}
