/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#BFAAFF",
        auxiliary: "#8837FF",
        grey: "#F6F7FA",
        borderGrey: "#3B3C4A"
      },
      fontFamily: {
        primary: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
