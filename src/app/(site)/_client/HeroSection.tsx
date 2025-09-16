'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = setTimeout(() => setReady(true), 50);
        return () => clearTimeout(id);
    }, []);

    return (
        <section
            id="mainSection"
            className={`relative h-[100svh] overflow-hidden ${ready ? 'ready' : ''}`}
        >
            <div className="absolute inset-0">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/bg-main.png`}
                    alt="메인 배경"
                    fill
                    priority
                    className="object-cover transform-gpu animate-zoom-out-110 motion-reduce:transition-none motion-reduce:transform-none"
                />
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto max-w-[var(--w-section-full)] px-6">
                    <h1
                        className="
                          enter-x delay-300
                          text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight
                          motion-reduce:transition-none motion-reduce:transform-none
                        "
                        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                        2025
                        <br />
                        AI AWARDS &
                        <br />
                        ENTREPRENEURS’
                        <br />
                        NIGHT
                    </h1>
                    <h2
                        className="enter delay-500 mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold opacity-80 leading-snug"
                        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                        : 제 7회 대한민국 인공지능 대상
                    </h2>
                </div>
            </div>
        </section>
    );
}
