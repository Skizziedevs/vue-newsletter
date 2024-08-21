/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx}"
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '976px',
      dt: '1280px',
      xl: '1440px',
    },
    extend: {
      colors: {
        DarkGrey: 'hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        gr: '#ff693b',
        gl: '#ff537b'
      
     },
    },
  },
  plugins: [],
}
