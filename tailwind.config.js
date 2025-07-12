/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#810AA6', // roxo MEISHOP
        secondary: '#E5007D', // rosa botão
      }
    },
  },
  plugins: [],
}
