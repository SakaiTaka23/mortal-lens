import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  outDir: 'dist',
  manifest: {
    name: 'Mortal Lens',
    description: 'Review Mahjong games with AI analysis',
    version: '1.0.0',
    permissions: [],
    host_permissions: [],
  },
  imports: {
    eslintrc: {
      enabled: true,
    },
  },
});
