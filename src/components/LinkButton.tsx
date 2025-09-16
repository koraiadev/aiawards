'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function LinkButton({ href, children, className }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={`relative inline-flex items-center gap-1 px-4 py-2 
                  overflow-hidden group ${className ?? ''}`}
        >
            <span className="text-white flex items-center gap-1">{children}</span>

            <span
                className="absolute inset-0 flex items-center justify-center gap-1
                   bg-gradient-to-r from-main to-main bg-no-repeat bg-[length:0%_100%]
                   bg-clip-text text-transparent
                   group-hover:bg-[length:100%_100%]
                   transition-[background-size] duration-700 ease-out"
            >
                {children}
            </span>

            <span
                className="absolute inset-0 border border-white
                   group-hover:border-main
                   transition-colors duration-500 ease-out
                   pointer-events-none"
            />
        </Link>
    );
}
