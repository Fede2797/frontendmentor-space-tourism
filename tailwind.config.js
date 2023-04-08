/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./images/home/background-home-mobile.jpg')",
        'tablet': "url('./images/home/background-home-tablet.jpg')",
        'desktop': "url('./images/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        'barlowcondensed': 'Barlow Condensed',
        'barlow': 'Barlow',
        'bellefair': 'Bellefair',
      }
    },
  },
  plugins: [],
}

