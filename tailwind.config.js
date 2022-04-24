module.exports = {
  purge: [
    '*.html',
    '*/**.{html,css,js}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   'body': '#15202B',
      //   'selected-text': '#A3A3FF',
      //   'theme': '#1DA1F2',
      //   'nav': '#8899A6',
      //   'secondary': '#9191A4',
      //   'badge': '#3F3F51',
      //   'input-border': '#565666',
      //   'input': '#2A2A35'
      // },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },

}
