import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// const hmr = {
//   clientPort: 443,
//   host: "localhost",
//   protocol: "wss"
// };

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    target: 'esnext',
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    // hmr
  },
  resolve: {
    alias: {
      gql: path.resolve(__dirname, "./src/assets/generated/"),
      '@': path.resolve(__dirname, './src')
    }
  },
})
