/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        big: "1200px",
        smallest: "320px",
      },
    },
  },
  plugins: [],
};
