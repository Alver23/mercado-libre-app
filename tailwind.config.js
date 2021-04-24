module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/client/components/**/*.{ts,tsx}',
    './src/client/containers/**/*.{ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#EEEEEE',
          500: '#999999'
        },
        yellow: {
          600: '#FFE600',
        },
        black: {
          500: '#333333'
        }
      },
      minHeight: {
        '86': '86vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
