/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    color: {
      gradiant: "(to right, rgb(251, 146, 60), rgb(251, 113, 133))",
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],

  darkMode: "class",
};
