import AnimatedBox from '@/components/AnimatedBox';

export const metadata = { title: 'BENEFIT | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="mx-auto max-w-[var(--w-section-full)] w-full mt-52 mb-32">
                <AnimatedBox>
                    <h2
                        className="text-3xl font-bold"
                        style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                    >
                        인공지능대상 기업인의 밤에서 수상하신 기업에는
                        <span className="shine-text pl-2">다양한 특전이 제공</span>
                        됩니다.
                        <br /> 수상 기업으로서의{' '}
                        <span className="shine-text">명예와 함께, 협회 차원의 홍보 지원</span>과{' '}
                        <span className="shine-text">
                            네트워킹 기회 등<br /> 여러 혜택
                        </span>
                        을 누리실 수 있습니다.
                    </h2>
                </AnimatedBox>
            </header>

            <section className="relative mx-auto max-w-[var(--w-section-full)] w-full mb-52">
                <AnimatedBox>
                    <img src="/img/img-emblem.png" alt="샘플 이미지" className="shadow-md" />
                </AnimatedBox>
                <AnimatedBox>
                    <img src="/img/img-plaque.png" alt="샘플 이미지" className="shadow-md mt-5" />
                </AnimatedBox>
                <AnimatedBox>
                    <img src="/img/img-attend.png" alt="샘플 이미지" className="shadow-md mt-5" />
                </AnimatedBox>
                <AnimatedBox>
                    <img
                        src="/img/image-press-reports.png"
                        alt="샘플 이미지"
                        className="shadow-md mt-5"
                    />
                </AnimatedBox>
            </section>
        </>
    );
}
