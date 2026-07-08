import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Não inline assets como data URI: SVGs com refs internas (url(#id))
    // quebram quando embutidos em <img src="data:...">
    assetsInlineLimit: 0,
  },
})
