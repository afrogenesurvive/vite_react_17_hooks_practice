import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react()],
  optimizeDeps: { include: ['react', 'react-dom'] }
})



// export default {
//   base: '/vite-react-app/',
//   plugins: [reactRefresh(), react()],
// };