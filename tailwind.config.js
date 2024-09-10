/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'sm' : '375px',
      'md' : '768px',
      'lg' : '1440px'
    },
    extend: {
      colors:{
          'blogYellow' : 'hsl(47, 88%, 63%)',
          'blogGray500' : 'hsl(0, 0%, 42%)',
          'bloggray950' : 'hsl(0, 0%, 7%)'
      },
      dropShadow: {
        'blk': '10px 10px 25px rgba(0, 0, 0, 1)'
      }
    },
    fontFamily:{
      'Figtree': ['Figtree']
    }
  },
  plugins: [],
}

