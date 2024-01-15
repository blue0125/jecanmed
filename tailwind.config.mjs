const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      padding: '1.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#012343',
      "primary-200": '#505050',
      "primary-500": '#01407b',
      regular: '#164a7c',
      info: '#f8f8fa',
      hover: '#cfa972',
    },
    // fontSize: {
      // '2.5xl': ['1.75rem', 1.2142857142857142],
    // },
    backgroundImage: {
      // 'product-btn': "url('/img/hero-pattern.svg')",
    },
    borderWidth: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
    },
    fontFamily: {
    },
    lineHeight: {
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      'extra-loose': '2.5',
    },
    extend: {
      spacing: {
      },
      borderRadius: {
      }
    }
  },
  plugins: [],
}
