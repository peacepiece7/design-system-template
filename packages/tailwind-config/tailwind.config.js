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
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, addBase, config }) {
      addUtilities(UTILITY_STYLES)
      // base styles
      // https://v1.tailwindcss.com/docs/plugins#adding-base-styles
      // addBase({ h1: config("theme.fontSize.4xl") })

      // media-query
      // https://v1.tailwindcss.com/docs/plugins#referencing-the-user-s-config

      // gradient color (default variants)
      // https://v1.tailwindcss.com/docs/plugins#providing-default-options

      // add compnents media-query
      // https://v1.tailwindcss.com/docs/plugins#css-in-js-syntax
    }),
  ],
}

// intellisense 때문에 ./default.css에서 오버라이드
const UTILITY_STYLES = {
  '.global-layout': {},
  '.link': {},
  '.btn-common': {},
  '.text-clickable': {},
}
