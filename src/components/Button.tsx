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
        <>
            <button
                onClick={onClick}
                className={`
                    relative flex-1 m-2 px-10 py-6 text-center uppercase
                    text-black font-semibold shadow-md
                    transition-all duration-500 bg-[length:200%_auto]
                    bg-gradient-to-r from-[var(--color-main)] via-[#e2c9a8] to-[var(--color-main)]
                    hover:bg-[position:right_center]
                    ${className}
                `}
            >
                {children}
            </button>
        </>
    );
}
