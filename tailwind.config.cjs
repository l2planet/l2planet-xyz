/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gri': {
          '900': '#222222',
          '800': "#2c2d30",
          '700': "#3a3b3f",
          '600': "#484a4f",
          '500': "#56585e",
        }
      },
    },
  },
  plugins: [],
}
