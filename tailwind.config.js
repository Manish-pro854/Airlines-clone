 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["index.html"],
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