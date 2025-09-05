'use client';
import { useEffect, useState } from 'react';

const MENUS = [
    { key: 'home', label: 'HOME' },
    { key: 'history', label: 'HISTORY' },
    { key: 'info', label: 'INFO' },
    { key: 'benefit', label: 'BENEFIT' },
    { key: 'contact', label: 'CONTACT' },
];

export default function Header() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
        );
        MENUS.forEach(({ key }) => {
            const el = document.getElementById(key);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            el && obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const go = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b bg-black">
            <nav className="mx-auto max-w-6xl h-20 px-4 flex items-center justify-center">
                <ul className="flex gap-[100px] text-sm">
                    {MENUS.map((m) => (
                        <li key={m.key}>
                            <button
                                onClick={() => go(m.key)}
                                className={`py-2 ${active === m.key ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'} text-white`}
                            >
                                {m.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
