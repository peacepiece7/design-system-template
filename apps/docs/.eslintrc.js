const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('@repo/config-eslint/node_modules/@vercel/style-guide/eslint/next'),
    'prettier',
    'turbo',
  ],
  // extends: ['@repo/config-eslint/next-lint.js'],
  // extends: ['@repo/config-eslint/next.js'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  parserOptions: {
    project: './tsconfig.json', // Ensure this path is correct
    tsconfigRootDir: __dirname,
  },
};
