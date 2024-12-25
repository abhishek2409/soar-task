/** @type {import('tailwindcss').Config} */
const theme = require('./src/styles/theme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
