import { defineConfig } from 'vite';

// `vite build` builds the app into dist/.
// `vite build --mode lib` builds the published module (overwebs-app.js) in the
// package root. Dependencies stay external and are imported as sibling
// packages (`../<pkg>/...`) so the module keeps working when served
// unbundled from node_modules, like the other overwebs packages.
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      build: {
        outDir: '.',
        emptyOutDir: false,
        sourcemap: true,
        copyPublicDir: false,
        lib: {
          entry: 'src/overwebs-app.js',
          formats: ['es'],
          fileName: () => 'overwebs-app.js'
        },
        rollupOptions: {
          external: id => !id.startsWith('.') && !id.startsWith('/') && !id.includes('/src/'),
          output: {
            paths: id => `../${id}`
          }
        }
      }
    };
  }
  return {
    build: {
      outDir: 'dist'
    }
  };
});
