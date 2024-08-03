// https://commitlint.js.org/reference/configuration.html
// import { GIT_COMMIT_TYPES } from './scripts/git_commit_template.js';

// import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';
import { GIT_COMMIT_TYPES } from './scripts/git_commit_template.mjs';

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'header-max-length': [2, 'always', 30],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      // [...GIT_COMMIT_TYPES.map((type) => type.name), ...GIT_COMMIT_TYPES.map((type) => type.kor)],
      ['수정', '저장', 'test'],
    ],
  },
  // ...
};

export default Configuration;
