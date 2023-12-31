/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      violet: '#4A3780',
      primaryBlack: '#1B1B1D',
      lightGray: '#E7E2F3',
      primaryWhite: '#fafafa',
    },
  },
  plugins: [],
};
