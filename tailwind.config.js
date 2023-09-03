/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cstColor: {
          100: "#3C486B",
          200: "#ff3939",
          300: "#F9FAFC",
          400: "#F45050",
          500: "#161a26",
          600: "#313b56",
        },
        cstDarkColor: {
          100: "#161a26",
          200: "#932f2f",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        robotoSlab: ["Roboto Slab", "sans-serif"],
        roboto: ["Roboto", "serif"],
        righteous: ["Righteous", "cursive"],
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
// 122379
