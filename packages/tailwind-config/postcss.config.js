const config = require('./tailwind.config')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
}
