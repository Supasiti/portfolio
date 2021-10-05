module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#264653',
        java: '#2a9d8f',
        gold: '#e9c46a',
        sandy: '#f4a261',
        burnt: '#e76f51',
      },
    },
    fontFamily: {
      title: ['Josefin Sans', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
