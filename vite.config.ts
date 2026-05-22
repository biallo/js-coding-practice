import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName !== undefined &&
  !repositoryName.endsWith('.github.io');

// https://vite.dev/config/
export default defineConfig({
  base: isProjectPage ? `/${repositoryName}/` : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/react')) {
            return 'react';
          }

          return undefined;
        },
      },
    },
  },
  plugins: [react()],
});
