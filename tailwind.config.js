/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // blue-500
        darkBg: '#121212',
        darkCard: '#1e1e1e',
        darkText: '#e5e7eb',
        darkBorder: '#374151',
      }
    },
  },
  plugins: [],
}