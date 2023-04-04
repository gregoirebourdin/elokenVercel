/** @type {DefaultColors} */
const {fontFamily} = require('tailwindcss/defaultTheme');

const DefaultColors = require('tailwindcss/colors');
module.exports = {
    darkMode: "class",
    content: [
        './src/links/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/components/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/templates/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/library/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/guards/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/**/**/**/*.{js,ts,jsx,tsx}',
        './src/base/**/**/**/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'dark',
    ],
    theme: {
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.75rem'}],
            lg: ['1.125rem', {lineHeight: '2rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['2rem', {lineHeight: '2.5rem'}],
            '4xl': ['2.5rem', {lineHeight: '3.5rem'}],
            '5xl': ['3rem', {lineHeight: '3.5rem'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1.1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },

        extend: {
            fontFamily: {
                sans: ['var(--font-bodyfont)', ...fontFamily.sans],
                serif: ['var(--font-headingfont)', ...fontFamily.serif],
                mono: ['var(--font-codefont)', ...fontFamily.mono],
                'body': ['var(--font-bodyfont)'],
                'heading': ['var(--font-headingfont)'],
                'code': ['var(--font-codefont)'],
            },
            borderRadius: {
                '4xl': '2rem',
                'ui': '1rem',
                'uismall': '0.75rem',
            },
            animation: {
                bouncing: 'bouncing 1s linear infinite',
            },
            keyframes: {
                bouncing: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                    '50%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                },
            },
            colors: {
                gray: DefaultColors.zinc,
                primary: DefaultColors.violet,
                error: {
                    50: '#FEF0F5',
                    100: '#FEE7EF',
                    200: '#FDD8E5',
                    300: '#FCC5D8',
                    400: '#FAA8C5',
                    500: '#F881AB',
                    600: '#F31260',
                    700: '#B80A47',
                    800: '#910838',
                    900: '#4E041E',
                },
            },


        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar-hide'),
        require('daisyui'),
    ],

};
