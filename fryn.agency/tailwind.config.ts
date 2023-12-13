import { type Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"  ,   "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  
  theme: {
    extend: {
      fontFamily: {
        'bodyFont' :['Peyda', 'cursive'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
