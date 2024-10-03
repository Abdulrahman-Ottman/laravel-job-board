/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
    extend: {
        colors:{
            "DevAO" : "rgb(50,140,241)"
        }
    },
  },
  plugins: [],
}

