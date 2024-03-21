/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homePage : "url('./src/assets/property/bunga3.jpeg')",
        sambutan : "url('./src/assets/property/bunga2.jpeg')",
        mempelai : "url('./src/assets/property/bunga5.jpeg')",
        tanggal : "url('./src/assets/property/bunga6.jpeg')",
        lokasi : "url('./src/assets/property/bunga4.png')",
        gallery : "url('./src/assets/property/bunga8.jpeg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        latin: ['Send Flowers', 'cursive'],
        origin: ['Original Surfer', 'cursive'],
        amellinda: ['Amellinda', 'cursive'],
      }
    },
  },
  plugins: [],
}