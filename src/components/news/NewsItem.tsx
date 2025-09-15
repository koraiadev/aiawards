import type { News } from '@/types/news';
import Image from 'next/image';

export default function NewsItem({ item }: { item: News }) {
    return (
        <div className="flex flex-col gap-5">
            <div className="h-10">
                <h2
                    className="text-4xl font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    {item.fixedNews && item.createdAt?.split('.')[0]}
                </h2>
            </div>
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                title={item.title}
            >
                <div
                    className="
                        flex flex-col gap-5 py-12 px-8 rounded-2xl cursor-pointer
                        transition-transform transform duration-500 ease-out
                        hover:-translate-y-4 hover:shadow-2xl
                    "
                    style={{
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                    }}
                >
                    <div className="relative w-auto h-[300px]">
                        <Image
                            alt="샘플 이미지"
                            src={item.imageUrl}
                            fill
                            unoptimized
                            className="rounded-2xl shadow-md"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2" title={item.title}>
                        {item.title}
                    </h3>
                    <p className="text-lg line-clamp-3">{item.content}</p>
                </div>
            </a>
        </div>
    );
}
