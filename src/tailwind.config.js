module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
