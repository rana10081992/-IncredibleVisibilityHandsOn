import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import '@testing-library/jest-dom'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // Optional: setup for Vitest
  },
});
