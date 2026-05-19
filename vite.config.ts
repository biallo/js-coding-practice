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
  plugins: [react()],
});
