import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Garante que os arquivos estáticos sejam carregados corretamente
  server: {
    historyApiFallback: true, // ✅ Garante que o React Router funcione no ambiente local
  }
});
