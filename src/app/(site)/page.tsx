import Section from '@/app/components/Section';
import Image from 'next/image';

export const metadata = { title: 'HOME | 기업인의 밤' };

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
                <div className="mx-auto w-[900px] z-10 flex flex-col items-center justify-center h-screen text-white">
                    <div className="relative">
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
                            className="absolute text-4xl font-semibold bottom-[0.5rem] right-0 text-white/90 drop-shadow-sm before:content-['|'] before:mr-2"
                            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                        >
                            제 7회 대한민국 인공지능 대상
                        </h2>
                    </div>
                </div>
            </section>
            <Section>sec02</Section>
            <Section>sec03</Section>
            <Section>sec04</Section>
            <Section>sec05</Section>
        </>
    );
}
