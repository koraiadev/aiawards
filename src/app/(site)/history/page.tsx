import HistoryList from '@/components/history/HistoryList';
import AnimatedBox from '@/components/AnimatedBox';

export const metadata = { title: 'HISTORY | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="mx-auto max-w-[var(--w-section-full)] w-full my-52">
                <AnimatedBox>
                    <h2
                        className="text-3xl font-bold"
                        style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                    >
                        <span className="text-[var(--color-main)]">인공지능 분야를 대표</span>하는
                        기관 및 기업들이 한 자리에 모여 소통하는 뜻깊은 자리가 될 수 있도록
                        <span className="text-[var(--color-main)] pl-2">인공지능 기업인의 밤</span>
                        으로 확대 진행합니다.
                    </h2>
                </AnimatedBox>
            </header>

            <section
                className="
                  relative mx-auto max-w-[var(--w-section-full)] w-full mb-52
                  before:content-[''] before:absolute before:top-0 before:bottom-0
                  before:left-6 before:w-px before:bg-stone-300
                  md:before:left-8
                "
            >
                <AnimatedBox fixed>
                    <HistoryList />
                </AnimatedBox>
            </section>
        </>
    );
}
