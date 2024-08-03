// https://commitlint.js.org/reference/configuration.html
// import { GIT_COMMIT_TYPES } from './scripts/git_commit_template.js';

/** @type {import('@commitlint/config-conventional')} */

import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';
import { GIT_COMMIT_TYPES } from './scripts/git_commit_template.js';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'header-max-length': [2, 'always', 10],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],
    'type-enum': () => [
      RuleConfigSeverity.Error,
      'always',
      [...GIT_COMMIT_TYPES.map((type) => type.name), ...GIT_COMMIT_TYPES.map((type) => type.kor)],
    ],
  },
  // ...
};

export default function () {
  return {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 10],
      'body-leading-blank': [2, 'always'],
      'body-max-line-length': [2, 'always', 80],
    },
    type: () => [...GIT_COMMIT_TYPES.map((type) => type.name), ...GIT_COMMIT_TYPES.map((type) => type.kor)],
  };
}
