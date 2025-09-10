import React from 'react';

export default function Button({
    children,
    className,
    onClick,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) {
    return (
        <button
            onClick={onClick}
            className={`
                w-auto bg-[var(--color-main)]
                text-lg text-white font-semibold
                py-4 px-16 ${className}
            `}
        >
            {children}
        </button>
    );
}
