import { ui } from '@mortal-lens/eslint-config/ui';

export default [
  ...ui,
  {
    ignores: ['.output/**', '.wxt/**', '**/*.config.*', 'node_modules/**'],
  },
];
