/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      cosmos: "url('../public/appBg.jpg')",
    },
    extend: {
      colors: {
        deleteRed: "#E89794",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animation"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        select: {
          "background-image": `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
              "colors.gray.200",
              colors.gray[200]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
        },
      });
    }),
  ],
};
