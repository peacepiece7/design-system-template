/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    'app/**/*.{js,ts,jsx,tsx}',
    'pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '2rem',
      xl: '2.2em',
      '2xl': '2.5rem',
      '3xl': '2.7rem',
      '4xl': '3rem',
      '5xl': '3.4rem',
      '6xl': '4rem',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

// intellisense 때문에 ./default.css에서 오버라이드
// const UTILITY_STYLES = {
//   '.global-layout': {},
//   '.link': {},
//   '.btn-common': {},
//   '.text-clickable': {},
// }
