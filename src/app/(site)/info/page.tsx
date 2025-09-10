import InfoForm from '@/app/(site)/info/_client/InfoForm';

export const metadata = { title: 'INFO | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="mx-auto max-w-[var(--w-section-full)] w-full mt-52 mb-32">
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
            </header>
            <InfoForm />
        </>
    );
}
