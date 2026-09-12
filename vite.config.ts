import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('canvas-confetti')) {
              return 'vendor-confetti';
            }
            return 'vendor-other';
          }
          if (id.includes('src/data/dictionaryData')) {
            return 'data-dictionary';
          }
          if (id.includes('src/data/') && id.includes('ExamData')) {
            const match = id.match(/([a-zA-Z0-9]+ExamData)/);
            if (match) {
              return `exam-${match[1]}`;
            }
            return 'data-exams';
          }
        }
      }
    }
  }
})
