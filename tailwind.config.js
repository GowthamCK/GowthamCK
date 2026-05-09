/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: 'rgb(var(--accent) / <alpha-value>)',
                surface: {
                    DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
                    raised: 'rgb(var(--surface-raised) / <alpha-value>)',
                    overlay: 'rgb(var(--surface-overlay) / <alpha-value>)',
                    border: 'rgb(var(--surface-border) / <alpha-value>)',
                },
                tp: 'rgb(var(--tp) / <alpha-value>)',
                ts: 'rgb(var(--ts) / <alpha-value>)',
                tm: 'rgb(var(--tm) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scanline': 'scanline 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'border-flow': 'borderFlow 4s linear infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                borderFlow: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
