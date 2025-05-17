import config from '@mortal-lens/eslint-config';

export default [
  ...config,
  {
    ignores: ['dist/**', '**/*.config.*'],
  },
];
