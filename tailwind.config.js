module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        blackRadish: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          accent: '#ff4d4f', // radish red
          secondary: '#383838',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
