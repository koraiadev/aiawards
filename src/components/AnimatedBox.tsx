'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode;
    fixed?: boolean;
    className?: string;
    delay?: number;
};

export default function AnimatedBox({ children, fixed = true, className = '', delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (fixed) {
                    if (entry.isIntersecting) setIsVisible(true);
                } else {
                    setIsVisible(entry.isIntersecting);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px',
            },
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
        };
    }, [fixed]);

    return (
        <div
            ref={ref}
            className={`
                transition-all duration-500 ease-out
                ${isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-8'}
                ${className}
            `}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
