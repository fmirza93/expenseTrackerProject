/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top right, #BCDCE3, #FFFFFF)",
      },
      colors: {
        primary: "#0C7489",
        primaryHover: "#0A404C",
      },
    },
  },
  plugins: [],
};
