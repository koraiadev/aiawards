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
                        flex flex-col gap-5 rounded cursor-pointer
                        bg-dark
                        transition-transform transform duration-500 ease-out
                        hover:-translate-y-4 hover:shadow-2xl
                    "
                    style={{
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        background:
                            'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(52, 55, 89, 1) 73%)',
                    }}
                >
                    <div className="relative w-auto h-48 img-zoom-container rounded">
                        <Image
                            alt="샘플 이미지"
                            src={item.imageUrl}
                            fill
                            unoptimized
                            className="shadow-md img-zoom"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2 px-6" title={item.title}>
                        {item.title}
                    </h3>
                    <p className="text-lg line-clamp-3 text-white/70 px-6 mb-6">{item.content}</p>
                </div>
            </a>
        </div>
    );
}
