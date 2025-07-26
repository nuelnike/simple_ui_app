import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  ssr: false,
  srcDir: "src",
  modules: ["@pinia/nuxt"],
  vite: {
    server: {
      watch: {
        usePolling: true
      },
    },
  },
  css: ["animate.css"],
  app: {
    head: {
        titleTemplate: `Sample UI`,
        meta: [
          { charset: "UTF-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1.0"}
        ], 
        script: [],
        link: [
          { href:"/style.css", rel:"stylesheet"},
        ], 
        bodyAttrs: {},
        htmlAttrs: {
          "lang": "en"
        }
    },
  },
  compatibilityDate: "2024-11-20",
  devtools: { enabled: false }
});