const colors = require("tailwindcss/colors");
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: colors.teal,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      cyan: colors.cyan,
      sky: colors.sky,
      gray: colors.gray,
      orange: colors.orange,
      amber: colors.amber,
    },
    extend: {
      zIndex: {
        111: "-1",
        9999: 9999,
      },
      flexBasis: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
