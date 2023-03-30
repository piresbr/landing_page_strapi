import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src/',
  build: {
    outDir: '../dist',
  },
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] }, optimizeDeps: { esbuildOptions: { plugins: [{ name: "load-js-files-as-jsx", setup(build) { build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => { return ({ loader: "jsx", contents: await fs.readFile(args.path, "utf8"), }) }); }, },], }, },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../.test/setup.js'],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
});
