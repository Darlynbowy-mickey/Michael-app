/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor:{      
      'my-pink':'#EAA0A2',
      'my-blue':'#3A4664',
      'light-pink':'#F5DADF',
      'my-black':'#000000'
    },
    fontFamily: {
      'pacifico': ['Pinyon Script','Roboto', 'cursive','Kaushan Script'],
      'Euphoria': ['Euphoria Script', 'cursive'],
    },
    width:{
      'my-width':'680px'
    },
    height:{
      'my-height':'483px'
    }

  }
  },
  variants:{},

  plugins: [],

  
}

