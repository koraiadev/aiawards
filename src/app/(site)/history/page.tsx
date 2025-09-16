import HistoryList from '@/components/history/HistoryList';
import AnimatedBox from '@/components/AnimatedBox';

export const metadata = { title: 'HISTORY | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="width-full mt-32 my-16 md:mt-52 md:my-32">
                <AnimatedBox fixed={false}>
                    <p className="mb-3 font-semibold tracking-wider vertical-bar">OUR HISTORY</p>
                </AnimatedBox>

                <h2
                    className="text-3xl/10 font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    <AnimatedBox delay={200} className="block">
                        <span className="shine-text">인공지능 분야를 대표</span>하는 기관 및
                        기업들이
                    </AnimatedBox>
                    <AnimatedBox delay={400} className="block">
                        한 자리에 모여 소통하는 뜻깊은 자리가 될 수 있도록
                    </AnimatedBox>
                    <AnimatedBox delay={600} className="block">
                        <span className="shine-text">인공지능 기업인의 밤</span>으로 확대
                        진행합니다.
                    </AnimatedBox>
                </h2>
            </header>

            <section
                className="
                  relative width-full mb-52
                  before:content-[''] before:absolute before:top-0 before:bottom-0
                  before:left-6 before:w-px
                  {/*before:bg-stone-300*/}
                  md:before:left-8
                "
                style={{
                    background:
                        'linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(48, 44, 30, 1) 8%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%)',
                }}
            >
                <AnimatedBox fixed>
                    <HistoryList />
                </AnimatedBox>
            </section>
        </>
    );
}
