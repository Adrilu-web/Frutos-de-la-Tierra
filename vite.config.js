import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          bootstrap: ['react-bootstrap'],
          sweetalert: ['sweetalert2'],
          firebase: ['firebase']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // aumenta el límite para no mostrar el warning por chunks grandes
  }
});