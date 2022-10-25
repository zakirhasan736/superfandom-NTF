/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xl: { 'max': '1920px' },
      'desktop-l': { 'max': '1880px' },
      'desktop-m': { 'max': '1680px' },
      'laptop-x': { 'max': '1440px' },
      'laptop-m': { 'max': '1280px' },
      lg: { 'max': '1199px' },
      md: { 'max': '991px' },
      sm: { 'max': '767px' },
      xs: { 'max': '475px' },
      '2xl': '1921px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
      primary: ['Atyp Display', 'serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#000000',
        'secondary': '#ffffff',
        'darkgray': '#878787', 
        'lightgray': '#E6E6E6', 
        'neon': '#6BD6D6',
        'skyblue': '#40A3FF',
      },
      fontSize: {
        'fig-xs': ['10px', '14.24px'],
        'fig-12': ['12px', '17.09px'],
        'fig-15': ['15px', '21.36px'],
        'fig-base': ['16px', '22.78px'],
        'fig-24': ['24px', '32.65px'],
        'fig-32': ['32px', '30.21px'],
        'fig-40': ['40px', '39.21px'],
        'fig-xx': ['64px', '62.73px'],
        'fig-3x': ['88px', '86.26px'],
        'fig-4x': ['96px', '136.7px'],
        'fig-5x': ['166px', '132.84px'],
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
