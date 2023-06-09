import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  clean: true,
  watch: options.watch,
  splitting: true,
  dts: true,
  minify: true,
}));
