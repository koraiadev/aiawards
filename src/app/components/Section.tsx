export default function Section({
    id,
    children,
    className = '',
}: {
    id: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={`min-h-screen scroll-mt-16 flex items-center ${className}`}>
            <div className="mx-auto max-w-6xl w-full px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">2025 AI AWARDS</h2>
                {children}
            </div>
        </section>
    );
}
