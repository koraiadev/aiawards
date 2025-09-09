import Section from '@/components/Section';
import NewsList from '@/components/news/NewsList';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: '기업인의 밤' };

export default function Page() {
    const logos = [
        '/img/logo/logo-01-msit.png',
        '/img/logo/logo-02-nipa.png',
        '/img/logo/logo-03-nia.png',
        '/img/logo/logo-04-iitp.png',
        '/img/logo/logo-05-mss.png',
        '/img/logo/logo-06-motie.png',
    ];

    return (
        <>
            <section id="mainSection" className="relactive h-screen">
                <Image
                    src="/img/bg-main.png"
                    alt="배경 이미지"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="mx-auto z-10 flex flex-col items-center justify-center h-screen text-white">
                    <div className="relative w-[var(--w-section-full)]">
                        <h1
                            className="font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1]"
                            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                        >
                            2025
                            <br />
                            AI AWARDS &
                            <br />
                            ENTREPRENEURS’
                            <br />
                            NIGHT
                        </h1>
                        <h2
                            className="absolute text-4xl font-semibold bottom-[0.5rem] right-0 text-white/90 drop-shadow-sm before:content-[':'] before:mr-2"
                            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                        >
                            제 7회 대한민국 인공지능 대상
                        </h2>
                    </div>
                </div>
            </section>
            <Section>
                <h2
                    className="text-3xl font-bold before:content-['|'] before:mr-3 before:text-[var(--color-main)]"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    인공지능대상 기업인의 밤 수상은 기업에게
                    <span className="text-[var(--color-main)] pl-2">특별한 가치</span>를 전합니다.
                </h2>
                <div className="relative mt-8">
                    <img
                        src="/img/img-attend-the-awards-ceremony.png"
                        alt="샘플 이미지"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </Section>
            <Section>
                <h2
                    className="text-3xl font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    <span className="text-[var(--color-main)]">인공지능 분야를 대표</span>하는 기관
                    및 기업들이 한 자리에 모여 소통하는
                    <br />
                    뜻깊은 자리가 될 수 있도록
                    <span className="text-[var(--color-main)] pl-2">인공지능 기업인의 밤</span>으로
                    확대 진행합니다.
                </h2>
                <div className="mt-8 text-right">
                    <Link href="/history" className="after:content-['>'] after:ml-1">
                        더보기
                    </Link>
                </div>
            </Section>
            <Section>
                <NewsList />
            </Section>
            <Section className="border-b-0 p-24 bg-gray-100">
                <img
                    src="/img/img-2025-schedule.png"
                    alt="샘플 이미지"
                    className="rounded-lg shadow-md"
                />
                <div className="flex gap-4 justify-center">
                    <div className="flex gap-4">
                        <div className="p-12 flex flex-col gap-2 items-center">
                            <p className="text-[var(--color-main)] font-semibold">신청 접수</p>
                            <p className="font-semibold">9.27 ~ 10.28</p>
                            <p>온라인 서류 제출</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-12 flex flex-col gap-2 items-center">
                            <p className="text-[var(--color-main)] font-semibold">서류 심사</p>
                            <p className="font-semibold">10.29 ~ 10.30</p>
                            <p>1차 후보 선정</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-12 flex flex-col gap-2 items-center">
                            <p className="text-[var(--color-main)] font-semibold">최종 심사</p>
                            <p className="font-semibold">11.1</p>
                            <p>전문가 최종 평가</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-[var(--color-main)]">
                        <div className="p-12 flex flex-col gap-2 items-center">
                            <p className="font-semibold">시상식</p>
                            <p className="font-semibold">11.19</p>
                            <p>기업인의 밤 개최</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-center">
                    <button className="bg-[var(--color-main)] text-white py-4 px-16 mt-12">
                        신청하기
                    </button>
                    <button className="bg-[var(--color-main)] text-white py-4 px-16 mt-12">
                        참가 신청서 & 공적서 양식 다운로드
                    </button>
                </div>
            </Section>
            <Section className="mb-48">
                <div className="full-bleed overflow-hidden">
                    <div className="flex animate-marquee w-max gap-[10%]">
                        {[...logos, ...logos].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`logo-${i}`}
                                className="h-14 w-auto object-contain"
                            />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
