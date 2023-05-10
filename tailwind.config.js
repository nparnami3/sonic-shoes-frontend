/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      oswald:"Oswald,sans-serif",
      urbanist:"Urbanist,sans-serif",
      orbit:"Orbitron, sans-serif"
    },
  
    
  },
  plugins: [],
}
