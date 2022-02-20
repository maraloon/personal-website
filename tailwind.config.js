const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [ './dist/**/*.html' ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
