/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('./src/assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./src/assets/sanFranciscoDesktop.jpg')",
        yosemite: "url('./src/assets/yosemite.jpg')",
        LA: "url('./src/assets/LA.jpg')",
        seattle: "url('./src/assets/seattle.jpg')",
        new_york: "url('./src/assets/new_york.jpg')",
        norway: "url('/assets/norway.jpg')",
        sydney: "url('./src/assets/sydney.jpg')",
        miami: "url('./src/assets/miami.jpg')",
        switzerland: "url('./src/assets/switzerland.jpg')",
        bali: "url('./src/assets/bali.jpg')",
        chicago: "url('./src/assets/chicago.jpg')",
        europe: "url('./src/assets/europe.jpg')",
        iceland: "url('./src/assets/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
