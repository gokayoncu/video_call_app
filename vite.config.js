import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  closeBundle() {
    try {
      copyFileSync(path.resolve(__dirname, 'public/_redirects'), path.resolve(__dirname, 'dist/_redirects'))
      console.log('✅ _redirects dosyası dist/ içine kopyalandı.')
    } catch (e) {
      console.warn('⚠️ _redirects dosyası kopyalanamadı:', e)
    }
  }
})
