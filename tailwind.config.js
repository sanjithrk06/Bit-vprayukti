/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // accent: '#45a247',
        // primary: '#151853',
        primary: '#00040f',
        accent: '#00f6ff',
        secondary: '#00f6ff',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      screens: {
        xs: "450px",
        dxs:"300px",
        na: "900px"
      },
    },
  },
  plugins: [],
};
