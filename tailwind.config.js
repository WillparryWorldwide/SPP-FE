/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#007bff',
      },
      fontFamily: {
        'filesonpro-regular': ['filesonpro-regular'],
        'filesonpro-bold': ['filesonpro-bold'],
        'filesonpro-medium': ['filesonpro-medium'],
        'filesonpro-mediumitalic': ['filesonpro-MediumItalic'],
      },
    },
  },
  plugins: [],
}

