/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        openSans : "Open Sans, sans-serif"
      },
      colors : {
        dark1 : "#040303",
        dark2 : "#070707",
        dark3 : "#1E1E1E",
        green : "#539E43",
        light : "#E1E1E1"
      }
    },
  },
  plugins: [],
  darkMode : "class"
}
