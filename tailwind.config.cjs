/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#0f172a',
        'lite': 'white',
      },
    },
  },
  plugins: [],
}
