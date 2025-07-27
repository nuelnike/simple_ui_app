import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src",
  modules: ["@pinia/nuxt"],
  css: ["animate.css"],
  compatibilityDate: "2024-11-20",
  devtools: { enabled: false },

  // devServer: {
  //   port: 5000,
  //   host: "0.0.0.0", // Required to expose app on public IP (Contabo)
  // },

  vite: {
    server: {
      allowedHosts: ['qa.nuelnike.com'],
      watch: {
        usePolling: true
      },
    },
  },

  app: {
    head: {
      titleTemplate: `Sample UI`,
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ],
      script: [],
      link: [
        { href: "/style.css", rel: "stylesheet" },
      ],
      bodyAttrs: {},
      htmlAttrs: {
        lang: "en"
      }
    },
  },
});
