/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          lighter: '#60a5fa',
          dark: '#0000AA',
        },
        secondary: '#FFFFFF', // Вторичный цвет (white)
      },
    },
  },
  plugins: [],
};