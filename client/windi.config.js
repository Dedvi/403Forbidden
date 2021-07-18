// windi.config.js
import defaultTheme from 'windicss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans].join(','),
      },
    },
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
  ],
}