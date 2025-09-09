import type { News } from '@/types/news';
import Image from 'next/image';

export default function NewsItem({ item }: { item: News }) {
    return (
        <li className="flex flex-col gap-5 mt-8">
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
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-lg">{item.content}</p>
        </li>
    );
}
