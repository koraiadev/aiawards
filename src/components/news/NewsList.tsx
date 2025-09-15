import type { News } from '@/types/news';
import NewsSwiper from '@/components/news/NewsSwiper';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

async function getNews(): Promise<News[]> {
    const res = await fetch(`${BASE_URL}/data/news.json`, { cache: 'no-store' });
    return res.json();
}

export default async function NewsList() {
    const news = await getNews();
    return <NewsSwiper news={news} />;
}
