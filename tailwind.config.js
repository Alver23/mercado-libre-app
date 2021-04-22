module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/client/components/**/*.{ts,tsx}',
    './src/client/containers/**/*.{ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
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
