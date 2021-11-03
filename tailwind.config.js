const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        logo: 'url(/lions-logo.png)',
      },
      minHeight: {
        12: '48px',
      },
    },
    fontFamily: {
      sans:
        'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    colors: {
      blue: {
        light: '#43569b',
        DEFAULT: '#00338d',
        dark: '#112e57',
      },
      yellow: {
        DEFAULT: '#ebb700',
      },
      gray: colors.trueGray,
      white: colors.white,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
