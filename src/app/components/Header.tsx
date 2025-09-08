'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const MENUS = [
    { href: '/', label: 'HOME' },
    { href: '/history', label: 'HISTORY' },
    { href: '/info', label: 'INFO' },
    { href: '/benefit', label: 'BENEFIT' },
    { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
    const pathname = usePathname();

    const [dark, setDark] = useState(false);
    const mainSectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (pathname !== '/') return setDark(true);

        const mainSection = document.getElementById('mainSection');
        if (!mainSection) return;

        mainSectionRef.current = mainSection;

        const observer = new IntersectionObserver(([entry]) => setDark(!entry.isIntersecting), {
            threshold: 0,
            rootMargin: '-170px 0px 0px 0px',
        });

        if (mainSectionRef.current) observer.observe(mainSectionRef.current);

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 text-white transition-colors duration-200
             ${!dark ? 'bg-main-header' : 'bg-black shadow-md'}`}
        >
            <nav className="mx-auto max-w-6xl h-20 px-4 flex items-center justify-center">
                <ul className="flex gap-[100px] text-md font-semibold">
                    {MENUS.map((m) => {
                        const active = pathname === m.href;
                        return (
                            <li key={m.href}>
                                <Link
                                    href={m.href}
                                    className={`relative inline-block pb
                                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300
                                        ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full after:bg-white/80'} `}
                                >
                                    {m.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
