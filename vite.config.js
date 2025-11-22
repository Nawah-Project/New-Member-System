import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for root deployment or '/your-subdirectory/' if deployed to a subdirectory
  publicDir: 'public', // Ensure public assets are copied to dist
})
