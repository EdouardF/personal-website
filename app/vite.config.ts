import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: [
      /src\/.*\.js$/, // Appliquez le chargeur jsx aux fichiers .js dans le dossier src
      /src\/.*\.jsx$/, // Appliquez le chargeur jsx aux fichiers .jsx dans le dossier src
      /src\/.*\.ts$/, // Appliquez le chargeur ts aux fichiers .ts dans le dossier src
      /src\/.*\.tsx$/, // Appliquez le chargeur tsx aux fichiers .tsx dans le dossier src
    ],
  },
  server: {
    open: true,
    port: 5173,
  },
  root: 'app',
  build: {
    outDir: 'dist',
  },
});