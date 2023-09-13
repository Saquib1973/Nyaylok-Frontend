/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redPrim: "#b22e3d",
        grayPrim: "#4D4D4D",
        blackPrim: "#000000",
      },
      fontFamily: {
        julius: ["Julius Sans One", "sans-serif"],
        ubantu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
