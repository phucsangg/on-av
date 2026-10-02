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
          const normalized = id.replace(/\\/g, '/');
          if (normalized.includes('/node_modules/')) {
            if (normalized.includes('/react/') || normalized.includes('/react-dom/')) {
              return 'vendor-react';
            }
            if (normalized.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            if (normalized.includes('/canvas-confetti/')) {
              return 'vendor-confetti';
            }
            return 'vendor-other';
          }
          if (normalized.includes('/src/data/dictionaryData')) {
            return 'data-dictionary';
          }
          if (normalized.includes('/src/data/') && normalized.includes('ExamData')) {
            const match = normalized.match(/([a-zA-Z0-9]+ExamData)/);
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
