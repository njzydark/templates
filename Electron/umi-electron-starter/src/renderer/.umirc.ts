import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  outputPath: '../../dist/renderer',
  layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
});
