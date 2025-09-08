'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENUS = [
    { href: '/', label: 'HOME' },
    { href: '/history', label: 'HISTORY' },
    { href: '/info', label: 'INFO' },
    { href: '/benefit', label: 'BENEFIT' },
    { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
                <nav className="mx-auto max-w-6xl h-20 px-4 flex items-center justify-center">
                    <ul className="flex gap-[100px] text-sm font-semibold">
                        {MENUS.map((m) => {
                            const active = pathname === m.href;
                            return (
                                <li key={m.href}>
                                    <Link
                                        href={m.href}
                                        className={`py-2 ${active ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}`}
                                    >
                                        {m.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </>
    );
}
