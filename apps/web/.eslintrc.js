/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config-eslint/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  exclude: ['node_modules', 'postcss.config.js'],
}
