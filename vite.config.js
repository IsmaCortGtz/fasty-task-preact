import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fasty-task-preact/',
  plugins: [preact()],
  server: {
    host: '0.0.0.0'
  }
});
