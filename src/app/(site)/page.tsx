import Section from '@/components/Section';
import NewsList from '@/components/news/NewsList';
import HomeButtonSection from '@/app/(site)/_client/HomeButtonSection';
import AnimatedBox from '@/components/AnimatedBox';
import HeroSection from '@/app/(site)/_client/HeroSection';
import LinkButton from '@/components/LinkButton';

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
            <HeroSection />
            <Section
                className="border-b-0 py-24"
                style={{
                    background:
                        'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(42, 43, 66, 1) 50%, rgba(0, 0, 0, 1) 100%)',
                }}
            >
                <AnimatedBox fixed={false}>
                    <p className="mb-3 font-semibold tracking-wider vertical-bar">AI AWARDS</p>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <h2
                        className="text-3xl font-bold"
                        style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                    >
                        인공지능대상 기업인의 밤 수상은 기업에게
                        <span className="pl-2 shine-text">특별한 가치</span>를 전합니다.
                    </h2>
                </AnimatedBox>
                <div className="relative mt-8">
                    <AnimatedBox fixed={false}>
                        <div className="img-zoom-container">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/img-attend-the-awards-ceremony.png`}
                                alt="샘플 이미지"
                                className="w-full h-full img-zoom"
                            />
                        </div>
                    </AnimatedBox>
                </div>
            </Section>
            <Section>
                <AnimatedBox fixed={false}>
                    <p className="mb-3 font-semibold tracking-wider vertical-bar">OUR HISTORY</p>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <h2
                        className="text-4xl font-bold leading-tight"
                        style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                    >
                        <span className="shine-text">인공지능 분야를 대표</span>하는 기관 및
                        기업들이
                        <br />
                        한 자리에 모여 소통하는 뜻깊은 자리가 될 수 있도록
                        <br />
                        <span className="shine-text">인공지능 기업인의 밤</span>
                        으로 확대 진행합니다.
                    </h2>
                    <div className="mt-8">
                        <LinkButton href="/history" className="text-lg">
                            더보기
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </LinkButton>
                    </div>
                </AnimatedBox>
            </Section>
            <Section>
                <AnimatedBox fixed={false}>
                    <div className="mb-3 py-3 flex justify-between">
                        <p className="font-semibold tracking-wider vertical-bar">MEDIA</p>
                        <div className="flex gap-x-3">
                            <button className="custom-prev bg-dark/70 hover:bg-dark text-white/80 rounded-full shadow-lg p-1 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>
                            <button className="custom-next bg-dark/70 hover:bg-dark text-white/80 rounded-full shadow-lg p-1 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <NewsList />
                </AnimatedBox>
            </Section>
            <Section
                className="border-b-0 py-24"
                style={{
                    background:
                        'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(42, 43, 66, 1) 50%, rgba(0, 0, 0, 1) 100%)',
                }}
            >
                <AnimatedBox fixed={false}>
                    <p className="mb-3 font-semibold tracking-wider vertical-bar">PROGRAM</p>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <div className="img-zoom-container">
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/img-2025-schedule.png`}
                            alt="샘플 이미지"
                            className="w-full h-full img-zoom"
                        />
                    </div>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <div className="relative flex justify-between max-w-5xl mx-auto my-14">
                        {[
                            {
                                title: '신청 접수',
                                date: '0.0 - 0.0',
                                desc: '온라인 서류 제출',
                            },
                            {
                                title: '서류 심사',
                                date: '0.0 - 0.0',
                                desc: '1차 후보 선정',
                            },
                            { title: '최종 심사', date: '0.0', desc: '전문가 최종 평가' },
                            {
                                title: '시상식',
                                date: '0.0',
                                desc: '기업인의 밤 개최',
                                active: true,
                            },
                        ].map((step, i, arr) => (
                            <div
                                key={i}
                                className="relative flex flex-col items-center w-1/4 text-center"
                            >
                                <div
                                    className={`w-6 h-6 rounded-full border-2 z-10
                                    ${step.active ? 'bg-main border-main' : 'border-main bg-dark'}`}
                                />

                                {i < arr.length - 1 && (
                                    <div className="absolute top-3 left-1/2 w-full h-[2px] bg-white/20 -z-10"></div>
                                )}

                                <div className="mt-6 flex flex-col gap-1">
                                    <p className="font-semibold text-main">{step.title}</p>
                                    <p
                                        className={`${step.active ? 'text-main' : ''} font-semibold`}
                                    >
                                        {step.date}
                                    </p>
                                    <p className={`${step.active ? 'text-main' : ''}`}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedBox>
                <AnimatedBox fixed={false}>
                    <HomeButtonSection />
                </AnimatedBox>
            </Section>
            <Section className="mb-48">
                <div className="full-bleed overflow-hidden">
                    <div className="flex animate-marquee w-max gap-24">
                        {[...logos, ...logos].map((src, i) => (
                            <img
                                key={i}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${src}`}
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
