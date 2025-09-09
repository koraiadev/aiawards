// tailwind.config.ts
import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: { extend: {} },
    plugins: [lineClamp],
};

export default config;
