import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'HyperCore',
      fileName: (format) => {
        if (format === 'es') {
          return 'hypercore.es.js';
        }

        return 'hypercore.min.js';
      },
      formats: ['es', 'iife']
    },

    rollupOptions: {
      output: {
        globals: {}
      }
    },

    minify: 'terser',
    sourcemap: true,
    emptyOutDir: true
  },

  define: {
    __VERSION__: JSON.stringify('1.0.0')
  }
});
