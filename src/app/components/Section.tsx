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
        <section
            id={id}
            className={`pt-[200px] scroll-mt-16 flex items-center bg-white ${className}`}
        >
            <div className="mx-auto max-w-[950px] w-full" style={{ border: '1px solid  silver' }}>
                {children}
            </div>
        </section>
    );
}
