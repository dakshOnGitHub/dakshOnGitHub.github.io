import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is <username>.github.io, so the site is served from the domain root.
// If you ever move it to a project repo (e.g. /portfolio/), set base: '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist' },
})
