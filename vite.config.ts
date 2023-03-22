import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dns from 'dns';
import react from '@vitejs/plugin-react-swc';
dns.setDefaultResultOrder('verbatim');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: './build',
  },
  server: {
    port: 3000,
  },
});
