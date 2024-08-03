// https://commitlint.js.org/reference/configuration.html
import { GIT_COMMIT_TYPES } from './scripts/git_commit_template.js';

/** @type {import('@commitlint/config-conventional')} */

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['lowercase', 'sentence-case', 'kebab-case']],
    'header-max-length': [2, 'always', 50],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],
    // 'footer-leading-blank': [2, 'always'],
    // 'footer-max-line-length': [2, 'always', 80],
  },
  type: [...GIT_COMMIT_TYPES.map((type) => type.name), ...GIT_COMMIT_TYPES.map((type) => type.kor)],
};
