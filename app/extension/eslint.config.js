import { ui } from '@mortal-lens/eslint-config/ui';

export default [
  ...ui,
  {
    ignores: ['dist/**', '.wxt/**', '**/*.config.*', 'node_modules/**'],
  },
];
