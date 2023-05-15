/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["Poppins"]
      },
      
      colors:{
        'mainBg': '#E0E2DB',
        'button': 'rgb(234 88 12)',
        'form': '#EAEAEA',
        'input': '#rgb(226, 225, 225)',
        'aliceblue': '#F0F8FF'
      },

      backgroundImage:{
        'home': "url('/src/assets/home.png')",
        'main': "url('/src/assets/main.png')",
        'mainMen': "url('/src/assets/mainMen.jpeg')",
        'mainWomen': "url('/src/assets/mainWomen.jpeg')",
        'womenShoes': "url('/src/assets/womenProd.jpeg')",
        'womenDress': "url('/src/assets/womenDress.jpeg')",
        'womentshirt': "url('/src/assets/womentshirt.jpg')",
        'womenjacket': "url('/src/assets/womenjacket.jpeg')",
        'menShoes': "url('/src/assets/menShoes.jpeg')",
        'menOffice': "url('/src/assets/menOffice.jpeg')",
        'menTshirt': "url('/src/assets/menTshirts.jpeg')",
        'menJacket': "url('/src/assets/menJackets.jpeg')",
      },

      screens:{
        'lg': '768px'
      }
    },
  },
  plugins: [],
}
