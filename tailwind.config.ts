import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Nanum Myeongjo', 'serif'],
            },
            colors: {
                main: '#CFAE89',
                dark: '#20212f',
            },
        },
    },
    plugins: [lineClamp],
};

export default config;
