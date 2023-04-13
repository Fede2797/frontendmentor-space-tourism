/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Home bg-images
        'mobile': "url('./images/home/background-home-mobile.jpg')",
        'tablet': "url('./images/home/background-home-tablet.jpg')",
        'desktop': "url('../images/home/background-home-desktop.jpg')",
        // Destination bg-images
        'destination-mobile': "url('./images/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./images/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('./images/destination/background-destination-desktop.jpg')",
        // Crew bg-images
        'crew-mobile': "url('./images/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./images/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./images/crew/background-crew-desktop.jpg')",
        // Technology bg-images
        'technology-mobile': "url('./images/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('./images/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('./images/technology/background-technology-desktop.jpg')",
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

