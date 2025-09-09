import type { News } from '@/types/news';
import NewsItem from '@/components/news/NewsItem';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

async function getNews(): Promise<News[]> {
    const res = await fetch(`${BASE_URL}/data/news.json`);
    return res.json();
}

export default async function NewsList() {
    const news = await getNews();

    return (
        <>
            {
                <ul className="flex gap-4">
                    {news.map((n) => (
                        <NewsItem key={n.id} item={n} />
                    ))}
                </ul>
            }
        </>
    );
}
