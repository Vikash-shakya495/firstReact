import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(),
    visualizer({ 
      open: true // Automatically open the report in the browser
    })
  ],
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set limit in kB
  },
})
