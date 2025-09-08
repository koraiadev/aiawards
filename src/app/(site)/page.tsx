import Section from '@/app/components/Section';
import Image from 'next/image';

export const metadata = { title: 'HOME | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <section className="relactive h-screen">
                <Image
                    src="/img/bg-main.png"
                    alt="배경 이미지"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
                    <h1
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                        <span>2025</span>
                        <br />
                        <span>AI AWARDS &</span>
                        <br />
                        <span>ENTREPRENEURS’</span>
                        <br />
                        <span>NIGHT</span>
                    </h1>
                    <h2 className="text-lg font-bold">제 7회 대한민국 인공지능 대상</h2>
                </div>
            </section>
            <Section>sec02</Section>
            <Section>sec03</Section>
            <Section>sec04</Section>
            <Section>sec05</Section>
        </>
    );
}
