import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/mycv/',
  plugins: [react()],
  server: {
    port: 3001,
  },
})
