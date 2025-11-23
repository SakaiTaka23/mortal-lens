import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    projects: [
      'packages/*',
      'app/*',
      {
        test: {
          include: ['src/**/*.test.ts'],
          name: 'unit',
          environment: 'node',
        }
      }
    ]
  }
});
