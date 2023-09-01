/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
    content: ['./src','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
      extend: {},
    },
    plugins: [flowbite, ("tw-elements/dist/plugin.cjs")], 
    darkMode: "class"
  }
  
  