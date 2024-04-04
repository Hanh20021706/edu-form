module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#faa51a",
        secondary: "#2854cc",
        blueLight: "#04BAFF",
        originLight: "#FEE9C8",
        originLight2: "#FFF6E8",
        white: "#ffffff",
        black: "#1B1B1B",
        blackLight: "#1d2939",
        gray: "#7C7C7C",
        gray2: "#0000001a",
        gray3: "#e4e7ec",
        whiteLight: "#F2F2F2",
        blueDark: "#0C266F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
