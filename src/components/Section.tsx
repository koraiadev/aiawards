export default function Section({
    id,
    children,
    className = '',
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={`mt-48 scroll-mt-16 flex items-center ${className}`}>
            <div className="mx-auto max-w-[var(--w-section-full)] w-full">{children}</div>
        </section>
    );
}
