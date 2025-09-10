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
                w-auto bg-transparent
                text-lg text-[var(--color-main)] font-semibold
                border-[3px] border-[var(--color-main)]
                py-4 px-16 ${className} shadow-md
                transition-all duration-300 ease-in-out will-change-transform
                hover:-translate-y-1 hover:shadow-lg
                hover:bg-[var(--color-main)] hover:text-[white] 
            `}
        >
            {children}
        </button>
    );
}
