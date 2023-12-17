import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";

const resolve = (str: string): string =>
  normalizePath(path.resolve(__dirname, str));
const variablePath = normalizePath(path.resolve("./src/variables.scss"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint(),
    viteStylelint({
      exclude: ["node_modules/**"]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
});
