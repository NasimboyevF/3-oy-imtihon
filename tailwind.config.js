/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'coral':'#35B8BE',
        'dark-coral':'#546285'
      },
      theme: {

        container: {

          screens: {

            xl: '1200px',
          },
        },

      },
    },
  },
  plugins: [],
}
