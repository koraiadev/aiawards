'use client';

import Button from '@/components/Button';
import { logger } from '@/utils/logger';

export default function HomeButtonSection() {
    const handleApply = () => {
        logger('info', 'Clicked apply button.');
    };

    const handleDownload = () => {
        logger('info', 'Clicked download button.');
    };
    return (
        <div className="flex gap-4 justify-center">
            <Button onClick={handleApply}>신청하기</Button>
            <Button onClick={handleDownload}>참가 신청서 & 공적서 양식 다운로드</Button>
        </div>
    );
}
