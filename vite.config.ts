import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, readFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const index = readFileSync('dist/index.html');
        writeFileSync('dist/404.html', index);
      },
    },
  ],
})
