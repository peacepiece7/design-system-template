/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
    'turbo',
  ],
  env: { browser: true, es2020: true },
  ignorePatterns: ['node_modules/', , 'dist/'],
}
