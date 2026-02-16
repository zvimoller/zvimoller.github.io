import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  // For your custom domain: "/"
  // If you ever deploy to https://<user>.github.io/<repo>/, set VITE_BASE="/<repo>/"
  const base = process.env.VITE_BASE ?? '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
