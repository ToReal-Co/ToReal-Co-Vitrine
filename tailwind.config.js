/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '5': '-5deg',
        '4': '5deg',
      },

      colors: {
        darkBlue: '#041136',
        trBlue: '#1170EA',
        blueBg: '#DBE9FE',
        trWhite: '#F7F6F5',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}