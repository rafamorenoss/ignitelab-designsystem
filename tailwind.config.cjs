/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 32,
    },
    colors: {
      "transparent": "transparent",

      "green-500": "#20D9C3",
      "green-300": "#06BEA8",
      "green-700": "#50EBD8",

      "red-500": "#FF334B",
      "red-300": "#C9162B",

      "gray-100": "#1E1E1E",
      "gray-600": "#A6A6A6",
      "gray-800": "#c8c8c8",
      "gray-900": "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: "Cairo, sans-serif",
      },

      ringOffsetWidth: {
        3: "3px",
        6: "6px",
        10: "10px",
      },
    },
  },
  plugins: [],
};
