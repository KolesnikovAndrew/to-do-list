/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      cosmos: "url('../public/appBg.jpg')",
    },
    extend: {
      colors: {
        deleteRed: "#E89794",
        categoryHobby: "#7ba617",
        categoryJob: "#780b04",
        categoryLifestyle: "#0f9fbf",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animation")],
};
