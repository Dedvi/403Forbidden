// windi.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [
    require('windicss/plugin/forms'),
  ],
}