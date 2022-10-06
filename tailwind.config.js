/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    screens: {
      sm: "320px",
      md: "425px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
