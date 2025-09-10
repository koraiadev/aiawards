import ContactForm from '@/app/(site)/contact/_client/ContactForm';

export const metadata = { title: 'CONTACT | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="mx-auto max-w-[var(--w-section-full)] w-full mt-52 mb-32">
                <h2
                    className="text-3xl font-bold"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                >
                    대한민국 인공지능대상
                    <span className="text-[var(--color-main)] px-2">운영사무국 문의처</span>
                    입니다.
                </h2>
            </header>
            <ContactForm />
        </>
    );
}
