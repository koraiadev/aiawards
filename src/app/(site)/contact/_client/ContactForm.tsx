'use client';

import InfoLabel from '@/components/InfoLabel';
import Button from '@/components/Button';
import { logger } from '@/utils/logger';

const inputBase = 'peer w-full border-b py-2 outline-none pl-3 bg-transparent';

export default function ContactForm() {
    const handleContact = () => {
        logger('info', 'Clicked contact button.');
    };

    return (
        <section className="width-full flex flex-col gap-24 mb-52">
            <div className="flex gap-10">
                <div className="w-44">
                    <InfoLabel label="name">성함</InfoLabel>
                </div>
                <div className="w-full relative">
                    <input
                        id="name"
                        type="text"
                        placeholder="성함을 입력하세요"
                        className={inputBase}
                    />
                    <span className="input-text" />
                </div>
            </div>
            <div className="flex gap-10">
                <div className="w-44">
                    <InfoLabel label="email">이메일</InfoLabel>
                </div>
                <div className="w-full relative">
                    <input
                        id="email"
                        type="email"
                        placeholder="이메일을 입력하세요 (ex : info@koraia.org)"
                        className={inputBase}
                    />
                    <span className="input-text" />
                </div>
            </div>
            <div className="flex gap-10">
                <div className="w-44">
                    <InfoLabel label="tel">연락처</InfoLabel>
                </div>
                <div className="w-full relative">
                    <input
                        id="tel"
                        type="tel"
                        placeholder="연락처를 입력하세요 (ex : 01012345678)"
                        className={inputBase}
                    />
                    <span className="input-text" />
                </div>
            </div>
            <div className="flex gap-10">
                <div className="w-44">
                    <div>
                        <InfoLabel label="content">상담내용</InfoLabel>
                    </div>
                </div>
                <div className="w-full relative">
                    <textarea
                        id="content"
                        placeholder="문의내용을 입력하세요"
                        rows={10}
                        className="peer w-full bg-transparent p-3 outline-none border resize-none transition-colors duration-300 focus:border-transparent"
                    />
                    <span className="pointer-events-none absolute inset-px border-2 border-main opacity-0 peer-focus:animate-border-spin" />
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-44 flex-shrink-0"></div>
                <Button onClick={handleContact} className="w-full">
                    문의하기
                </Button>
            </div>
        </section>
    );
}
