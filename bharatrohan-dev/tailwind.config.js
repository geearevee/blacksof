/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2
      lg: '1.125rem', // body1
      xl: '1.25rem', // h6
      '2xl': '1.5rem', // h5
      '3xl': '2rem', //h4
      '4xl': '2.5rem', // h3
      '5xl': '3.25rem', // h2
      '6xl': '4rem', // h1
      '7xl': '5rem', // h1
    },

    extend: {
      screens: {
        xl: '1270px',
      },

      colors: {
        'yellow-dark': '#E28B00',
        dark: '#3d3d3d',
        green: '#163E33',
        yellow: '#F4D33D',
        cream: '#FFFDEF',
        cream2: '#F7F2EC',
        darkCream: '#F7F2EC',
        lightGray: '#F4F4F4',
      },

      borderWidth: {
        1: '1px',
      },

      gridTemplateRows: {
        'solutions-mobile': '400px 400px',
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },

      boxShadow: {
        'contact-points': '0 0 0 7px  #E28B00',
        card: 'rgba(247, 151, 79, 0.4) 0px 10px 50px', // remnove in production
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
