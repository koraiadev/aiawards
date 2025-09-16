'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import type { News } from '@/types/news';
import NewsItem from '@/components/news/NewsItem';
import { useEffect, useState } from 'react';

export default function NewsSwiper({ news }: { news: News[] }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={3}
                // navigation
                loop
                className="py-6"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                style={{ overflow: 'visible' }}
            >
                {news.map((n) => (
                    <SwiperSlide key={n.id}>
                        <NewsItem item={n} />
                    </SwiperSlide>
                ))}

                {/*<div className="swiper-button-prev hidden"></div>*/}
                {/*<div className="swiper-button-next hidden"></div>*/}
            </Swiper>
        </div>
    );
}
