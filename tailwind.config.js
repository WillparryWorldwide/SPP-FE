/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#007bff',
        complete: '#02903C',
        notstarted: '#A29898',
        paused: '#EE8227',
        closed: '#BB1B23',
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

