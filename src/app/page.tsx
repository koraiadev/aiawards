import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

export default function Page() {
    return (
        <>
            <Header />
            <main className="pt-14">
                <Section id="home" className="bg-white">
                    <p className="text-lg">제 7회 대한민국 인공지능 대상</p>
                </Section>
            </main>
            <Footer />
        </>
    );
}
