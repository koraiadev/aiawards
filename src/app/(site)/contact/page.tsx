import ContactForm from '@/app/(site)/contact/_client/ContactForm';
import AnimatedBox from '@/components/AnimatedBox';

export const metadata = { title: 'CONTACT | 기업인의 밤' };

export default function Page() {
    return (
        <>
            <header className="width-full mt-32 my-16 md:mt-52 md:my-32">
                <AnimatedBox fixed={false}>
                    <p className="mb-3 font-semibold tracking-wider vertical-bar">CONTACT</p>
                </AnimatedBox>
                <AnimatedBox>
                    <h2
                        className="text-3xl font-bold"
                        style={{ textShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 6px' }}
                    >
                        대한민국 인공지능대상
                        <span className="shine-text px-2">운영사무국 문의처</span>
                        입니다.
                    </h2>
                </AnimatedBox>
            </header>
            <AnimatedBox>
                <ContactForm />
            </AnimatedBox>
        </>
    );
}
