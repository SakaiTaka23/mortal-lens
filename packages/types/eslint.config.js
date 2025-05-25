import { lib } from '@mortal-lens/eslint-config/lib';

export default [
  ...lib,
  {
    ignores: ['dist/**', '**/*.config.*'],
  },
];
