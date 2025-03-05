const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["IBM Plex Mono", ...fontFamily.mono],
        manjari: ["Manjari"],
        anonymous: ["Anonymous Pro"]
      },
    },
  },
  plugins: [],
};