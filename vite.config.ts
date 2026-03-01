import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    viteTsConfigPaths({
      // this is the plugin that enables path aliases
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  ssr: {
    noExternal: [],
    // PostgreSQL native modules excluded from SSR bundle
    external: ['pg', 'pg-native'],
  },
  optimizeDeps: {
    // Prevent Vite from bundling native dependencies
    exclude: ['pg', 'pg-native'],
  },
});

export default config;
