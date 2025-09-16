export default function Section({
    id,
    children,
    className = '',
    style = {},
}: {
    id?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <section
            id={id}
            className={`mt-48 scroll-mt-16 flex items-center ${className}`}
            style={style}
        >
            <div className="width-full">{children}</div>
        </section>
    );
}
