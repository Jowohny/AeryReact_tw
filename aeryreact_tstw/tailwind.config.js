/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['random'],
  theme: {
    extend: {
      colors: {
        "aery-purple": "#6356e5",
      },
    },
  },
  plugins: [],
}

