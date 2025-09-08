import Section from '@/app/components/Section';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: '기업인의 밤' };

export default function Page() {
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
                    <Link href="/info" className="after:content-['>'] after:ml-1">
                        더보기
                    </Link>
                </div>
            </Section>
            <Section>
                <h2
                    className="text-4xl font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    2024
                </h2>
                <div className="flex gap-10 mt-8">
                    <div>
                        <img
                            src="/img/img-news-01.png"
                            alt="샘플 이미지"
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-8 text-2xl font-bold">
                            AI로 인정받은 20개 기업들, AI 강국 도약의 가능성 입증 [2024 AI대상]
                        </p>
                        <p className="mt-5 text-sm">
                            올해로 6회째를 맞는 국내 대표 인공지능 시상식인 ‘2024 대한민국
                            인공지능대상’에서 혁신 기술로 인공지능(AI) 생태계를 이끌고 있는 기업들이
                            그 공로를 인정받아 …
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/img-news-02.png"
                            alt="샘플 이미지"
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-8 text-2xl font-bold">
                            [알립니다] 2024 대한민국 인공지능(AI)대상 주인공을 찾습니다
                        </p>
                        <p className="mt-5 text-sm">
                            인공지능(AI)과 함께 살아가는 시대입니다. AI는 기술 혁신을 넘어 산업
                            속으로 그리고 우리의 생활 속에 녹아들고 있습니다. 특정 분야에서 특정
                            사람들만 사용하는 …
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/img-news-03.png"
                            alt="샘플 이미지"
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-8 text-2xl font-bold">
                            [2023 AI대상] 김영수 IT조선 대표 “AI 시대 발전 이끌 기업 발굴 노력할 것”
                        </p>
                        <p className="mt-5 text-sm">
                            “우리는 이제 인공지능과 함께 살아가는 시대를 맞이했다. IT조선은 국내
                            인공지능 산업이 더욱 발전하기를 바라며, 우수 기업을 발굴하고 알리는 데
                            더욱 힘쓰겠다.”
                        </p>
                    </div>
                </div>
            </Section>
            <Section className="bg-gray-100 border-b-0 p-24">
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
            <Section></Section>
        </>
    );
}
