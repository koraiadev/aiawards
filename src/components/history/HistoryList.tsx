import type { HistoryData } from '@/types/history';
import HistoryItem from '@/components/history/HistoryItem';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

async function getHistories(): Promise<HistoryData[]> {
    const res = await fetch(`${BASE_URL}/data/history.json`, { cache: 'force-cache' });
    return res.json();
}

export default async function HistoryList() {
    const histories = await getHistories();

    return (
        <>
            {histories.map((entity) => (
                <HistoryItem key={entity.year} history={entity} />
            ))}
        </>
    );
}
