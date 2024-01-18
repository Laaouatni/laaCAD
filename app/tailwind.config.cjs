/** @type {import('tailwindcss').Config}*/

const colors = require("tailwindcss/colors");

const twReverseColors = (obj) => {
  const arr = Object.entries(obj);
  return Object.fromEntries(
    arr.map(([, value], i) => {
      const l = arr.length;
      const reversedIndex = l - 1 - i;
      const reversedKey = arr[reversedIndex][0];
      return [reversedKey, value];
    }),
  );
};

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        light: colors.neutral,
        dark: twReverseColors(colors.neutral),
      },
    },
  },

  plugins: [],
};

module.exports = config;
