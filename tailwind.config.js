module.exports = {
  purge: [
    './src/styles.css',
    './public/index.html',
    './public/styles.css',
    './public/js/animate-background.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aqua: '#00F7FF'
      },
      fontFamily: {
        body: ['Nunito']
      }
    }
  }
}
