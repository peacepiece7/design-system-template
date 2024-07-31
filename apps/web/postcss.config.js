const config = require('@repo/tailwind-config/tailwind.config.js')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
}
