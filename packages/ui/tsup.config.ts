import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm'],
  outDir: 'dist',
  clean: true,
  external: ['react', 'react-dom'],
});
