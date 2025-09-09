import type { News } from '@/types/news';
import Image from 'next/image';

export default function NewsItem({ item }: { item: News }) {
    return (
        <li className="flex flex-col gap-5">
            <div className="h-10">
                <h2
                    className="text-4xl font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    {item.fixedNews && item.createdAt?.split('.')[0]}
                </h2>
            </div>
            <div className="relative w-[400px] h-[300px]">
                <Image
                    alt="샘플 이미지"
                    src={item.imageUrl}
                    fill
                    unoptimized
                    className="rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 1024px"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </div>
            <h3 className="text-xl font-bold line-clamp-2" title={item.title}>
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    title={item.title}
                >
                    {item.title}
                </a>
            </h3>
            <p className="text-lg line-clamp-3">{item.content}</p>
        </li>
    );
}
