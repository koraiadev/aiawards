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
            rootMargin: '-80px 0px 0px 0px',
        });

        observer.observe(mainSection);
        return () => observer.disconnect();
    }, [pathname]);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (open) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [open]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 text-white/80 transition-all duration-500
                ${
                    !dark
                        ? 'bg-white/10 backdrop-blur-sm border-b border-white/10'
                        : 'bg-black/30 backdrop-blur-md shadow-lg border-b border-white/20'
                }`}
        >
            <div className="mx-auto max-w-6xl h-16 md:h-20 px-4 flex items-center justify-end md:justify-center">
                {/* 데스크톱 */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex items-center gap-8 lg:gap-20 text-sm lg:text-base font-semibold">
                        {MENUS.map((m) => {
                            const active = isActive(m.href);
                            return (
                                <li key={m.href}>
                                    <Link
                                        href={m.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`relative inline-block pb-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded
                                            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:transition-all after:duration-300
                                            ${
                                                active
                                                    ? 'text-white after:w-full after:bg-white'
                                                    : 'hover:text-white after:w-0 hover:after:w-full after:bg-white/80'
                                            }`}
                                    >
                                        {m.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                {/* 모바일 햄버거 */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center size-10 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors"
                    aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={open}
                    aria-controls="mobileMenu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg
                        className={`size-5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        {open ? (
                            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <>
                                <path strokeLinecap="round" d="M4 7h16" />
                                <path strokeLinecap="round" d="M4 12h16" />
                                <path strokeLinecap="round" d="M4 17h16" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            <nav
                id="mobileMenu"
                className={`md:hidden fixed top-0 left-0 h-dvh w-[78vw] max-w-[320px]
                    bg-black/80 backdrop-blur-md border-l border-white/10
                    transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <ul className="p-6 pt-24 flex flex-col gap-4 text-base font-semibold">
                    {MENUS.map((m) => {
                        const active = isActive(m.href);
                        return (
                            <li key={m.href}>
                                <Link
                                    href={m.href}
                                    className={`block px-2 py-3 rounded-md transition-colors
                                        ${active ? 'text-white bg-white/10 vertical-bar' : 'text-white/85 hover:text-white hover:bg-white/10'}`}
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
