/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0d1117',
        'brand-dark': '#010409',
        'brand-green': '#2ea44f',
        'brand-neon': '#3fb950',
      }
    },
  },
  plugins: [],
}
