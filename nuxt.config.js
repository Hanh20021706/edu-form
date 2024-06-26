import { resolve } from "path";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
  head: {
    title: "edu-form",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    vueI18n: {
      fallbackLocale: "vi",
      messages: {
        en: require("./locales/en.json"),
        vi: require("./locales/vi.json"),
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  buildDir: "dist",
};
