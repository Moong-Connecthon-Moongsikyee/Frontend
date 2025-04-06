// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RiaSans: ['RiaSans-ExtraBold'],
        sans: [ 'Pretendard-Regular'],
      },

      colors: {
        'ag-green': '#304D29',
        'white': '#FFFEFD',
      },
    },
  },
  plugins: [],
};