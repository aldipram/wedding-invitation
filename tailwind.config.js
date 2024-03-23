/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#865b2f',
      },
      backgroundImage: {
        homePage : "url('/src/assets/property/homepage.jpeg')",
        background : "url('/src/assets/property/sambutan.jpeg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        latin: ['Send Flowers', 'cursive'],
        origin: ['Original Surfer', 'cursive'],
        amellinda: ['Amellinda', 'cursive'],
        santorini: ['Santorini', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        trajan: ['Trajan Pro', 'serif'],
      }
    },
  },
  plugins: [],
}