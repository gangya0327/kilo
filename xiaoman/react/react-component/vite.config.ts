import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
  const isDev = command !== 'build'
  return {
    plugins: [
      react(),
      dts({
        include: ['packages/**/*.tsx', 'packages/**/*.ts'],
        insertTypesEntry: true,
        rollupTypes: true,
        outDir: path.resolve(__dirname, 'dist'),
      }),
    ],
    root: isDev ? path.resolve(__dirname, 'example') : undefined,
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      lib: {
        entry: path.resolve(__dirname, 'packages/index.ts'),
        name: 'ui组件',
        formats: ['es', 'umd', 'cjs', 'iife'],
        fileName: (format) => `ui.${format}.js`,
      },
      rolldownOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  }
})
