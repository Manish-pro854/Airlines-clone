/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
    fontFamily:
    {
      mulish: ['Mulish', 'sans-serif']
    }
    },
  },
  plugins: [],
}

