'use client';

import '@/styles/scrollbar.css';
import './globals.css';
import { pretendard } from './fonts';
import { useEffect } from 'react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    }, []);

    return (
        <html lang="ko">
            <body className={`${pretendard.variable} antialiased`}>{children}</body>
        </html>
    );
}
