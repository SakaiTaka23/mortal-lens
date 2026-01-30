import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  outDir: 'dist',
  manifest: {
    name: 'Mortal Lens',
    description: 'Review Mahjong games with AI analysis',
    version: '1.0.0',
    permissions: ['tabs', 'webNavigation', 'storage'],
    host_permissions: ['https://mjai.ekyu.moe/*'],
  },
  imports: {
    eslintrc: {
      enabled: true,
    },
  },
});
