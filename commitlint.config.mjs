import { GIT_COMMIT_CONFIGURATION } from './scripts/generate_commit_msg_template.mjs';

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'header-max-length': [2, 'always', 30],
    'body-leading-blank': [2, 'always'], // body begins with blank line
    'body-max-line-length': [2, 'always', 80],
    'type-enum': [2, 'always', GIT_COMMIT_CONFIGURATION['type-enum'].map((type) => type.name)],
  },
};

export default Configuration;
