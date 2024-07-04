/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      fontWeight:{
        'normal': 500,
        'semibold':600,
        'bold': 700,

      },
      screens: {
        'sm': {'max':'320px'},    // Mobile screen size
        'md': {'max':'768px'},    // Tablet screen size (if needed)
        'lg': {'max':'1024px'},   // Desktop screen size
        'xl': {'max':'1440px'},   // Large desktop screen size
      },
    },
  },
  plugins: [],
}
