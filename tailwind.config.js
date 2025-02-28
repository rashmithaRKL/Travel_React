/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50', // Green color for Sri Lanka theme
          dark: '#388E3C',
          light: '#81C784',
        }
      },
    },
  },
  plugins: [],
}
