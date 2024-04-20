const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      background_color:{
        'dark-green': '#006044',
        'light-green': '#76A923',
        'khaki-brown': '#AF8A49'
      }
    },
  },
  plugins: [flowbite.plugin()],
};
