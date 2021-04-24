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
          500: '#999999',
          600: '#666666'
        },
        yellow: {
          600: '#FFE600',
        },
        black: {
          500: '#333333'
        },
        blue: {
          500: '#3483FA',
          600: '#2968c8',
        }
      },
      minHeight: {
        '83': '83vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
