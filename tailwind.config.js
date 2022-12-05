/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        25: '#EEEAFB',
        50: '#BCAAEE',
        100: '#9B80E6',
        200: '#582AD5',
        300: '#3700CD',
        400: '#2E00AB',
        500: '#250089',
        600: '#1B0066',
        700: '#120044',
        800: '#120044',
        900: '#0B0029'
      },
      secondary: {
        25: '#FFF5EE',
        50: '#FFEEE3',
        100: '#FEE6D4',
        200: '#FEDEC6',
        300: '#FED5B8',
        400: '#FECDAA',
        500: '#D4AB8E',
        600: '#A98971',
        700: '#7F6755',
        800: '#554439',
        900: '#332922'
      },
      text: {
        1: '#292627',
        2: '#5D5658',
        3: '#A9A9A9'
      },
      success: '#18C314',
      warningstate: '#FE0000',
      inactive: '#91888B',
      outline: '#E8E6E6',
      warning: {
        1: '#FFA503',
        2: '#FDB22D'
      },
      light: '#F9F7F4',
      dark: '#171717',
      white: '#ffffff'
    },
    fontFamily: {
      custom: ['DM Sans']
    }
  },
  plugins: []
};
