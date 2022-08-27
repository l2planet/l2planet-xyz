/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{tsx,ts}",
    "./src/views/**/*.{tsx,ts}",
    "./src/components/**/*.{tsx,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
        fontSize: {
            '4.5xl': '2.5rem',
            '3.5xl': '1.875rem',
            '2.5xl': '1.375rem',
            '0.5xl': '1.25rem',
            '0.25xl': '1.1rem'
        }
    },
  },
  plugins: [],
}
