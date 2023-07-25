import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
},
preview: {
    port: 3000,
},
  build: {
    outDir: '../../dist/apps/ats-app/'
},
});
