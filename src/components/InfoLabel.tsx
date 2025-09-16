import React from 'react';

export default function InfoLabel({
    children,
    label,
    className = '',
}: {
    children: React.ReactNode;
    label?: string;
    className?: string;
}) {
    return (
        <div
            className={`
                h-full flex items-center text-white
                text-xl font-semibold py-1 border-b-[3px] border-main ${className}
            `}
        >
            {label ? (
                <label htmlFor={label} className="cursor-pointer">
                    {children}
                </label>
            ) : (
                <p>{children}</p>
            )}
        </div>
    );
}
