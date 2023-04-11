/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./images/home/background-home-mobile.jpg')",
        'tablet': "url('./images/home/background-home-tablet.jpg')",
        'desktop': "url('./images/home/background-home-desktop.jpg')",
        'destination-mobile': "url('./images/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./images/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('./images/destination/background-destination-desktop.jpg')",
      },
      fontFamily: {
        'barlowcondensed': 'Barlow Condensed',
        'barlow': 'Barlow',
        'bellefair': 'Bellefair',
      },
      colors: {
        'light-blueish': '#D0D6F9'
      }
    },
  },
  plugins: [],
}

