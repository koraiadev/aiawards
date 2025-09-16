'use client';

export default function Footer() {
    return (
        <footer className="border-t border-gray-50/20">
            <section className="width-full">
                <div className="h-60 flex justify-center items-center flex-col gap-2">
                    <div className="mb-12 flex justify-center items-center gap-10">
                        {/*<a href="https://it.chosun.com" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <img src="/img/logo/logo-it-chosun.png" alt="" />*/}
                        {/*</a>*/}
                        {/*<a href="https://koraia.org/" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <img src="/img/logo/logo-koraia.png" alt="" />*/}
                        {/*</a>*/}
                    </div>
                    <p>Copyright © 2025 All rights reserved</p>
                    <p>#운영사무국 & (사)한국인공지능협회</p>
                </div>
            </section>
        </footer>
    );
}
