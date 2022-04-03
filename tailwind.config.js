const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [ './dist/**/*.html' ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
            code: {
              color: theme('colors.yellow.500'),
              backgroundColor: theme('colors.neutral.800'),
              padding: 2 
            },
            pre: {
              color: theme('colors.yellow.500'),
              backgroundColor: theme('colors.neutral.800'),
              fontWeight: 'bold',
              borderRadius: 'none'
            },
            li: {
              listStyleType: 'square',
            },
            hr: {
              border: '1px solid'
            },
            '--tw-prose-bullets': theme('colors.neutral.900'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
