'use client';

import Button from '@/components/Button';
import { logger } from '@/utils/logger';
import React from 'react';

export default function HomeButtonSection() {
    const handleApply = () => {
        logger('info', 'Clicked apply button.');
    };

    // const handleDownload = () => {
    //     logger('info', 'Clicked download button.');
    // };

    return (
        <div className="flex gap-4 justify-center">
            {/*<Button onClick={handleApply}>신청하기</Button>*/}

            <button
                className="relative inline-flex items-center gap-1 px-10 py-4 overflow-hidden group"
                onClick={handleApply}
            >
                <span className="text-white flex items-center gap-1">신청하기</span>

                <span
                    className="absolute inset-0 flex items-center justify-center gap-1
                    bg-gradient-to-r from-main to-main
                    bg-[length:0%_100%] bg-no-repeat
                    bg-clip-text text-transparent
                    transition-[background-size] duration-700 ease-out
                    group-hover:bg-[length:100%_100%]"
                >
                    신청하기
                </span>

                <span
                    className="absolute inset-0 border border-white/80
                    group-hover:border-main
                    transition-colors duration-500 ease-out
                    pointer-events-none"
                />
            </button>

            {/*<Button onClick={handleDownload}>참가 신청서 & 공적서 양식 다운로드</Button>*/}
        </div>
    );
}
