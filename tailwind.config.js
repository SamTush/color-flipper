/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          myRed: '#b20d30',
          myBlack: '#0f110c',
          myGreen: '#5b8266',
          myPink: '#eb9486',
          myCoral: '#fc814a',
          myOrange: '#ffb140',
        },
        fontFamily: {
            myFont:['"Geologica"', 'sans-serif'],
            cherryBomb: ['"Cherry Bomb One"', 'cursive'],
        },
        spacing: {
            '555': '100vh',
        },
    },
  },
  plugins: [],
}
