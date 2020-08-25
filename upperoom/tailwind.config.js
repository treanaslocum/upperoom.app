/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      grey: {
        900: '#010001',
        800: '#100E14',
        700: '#262834',
        600: '#313245',
        400: '#21212D',
        300: '#313247',
        200: '#80808A',
        100: '#DEDCE4',
      },
      blue: {
        500: '#1B1823',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
