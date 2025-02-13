import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Usa el puerto que Render asigna o 3000 por defecto
    host:'0.0.0.0', // Necesario para que Render pueda acceder
  },
});