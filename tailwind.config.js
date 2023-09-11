/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
    plugins: [flowbite, require("tw-elements/dist/plugin")], 
    darkMode: "class"
  }
  
  