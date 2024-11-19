/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'darkblue':'#282938',
        'royalBlue':'#2405f2',
        'tintBlue':'#1c1e53',
        'yellow':'#fcd980',
        'grey':'#f4f6fc',
        'accent':'#eef4fa',
      },
      backgroundImage:{
        'image-5':"url('/public/images/image-5.jpg')",
      },
    },
  },
  plugins: [require('daisyui'),],
}

