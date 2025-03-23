/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'sans-serif']
    }, colors: {
      black: "#2D3B75",
      primary: "#F4C2C2",
      "primary-text-color": "#DF9595",
      accent: "#FFF3E8",
      
    },
    },
  },
  plugins: [],
};
