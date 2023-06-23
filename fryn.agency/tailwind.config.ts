import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bodyFont' :['Peyda', 'cursive'],
      },
      backgroundImage: {
        'first-bg': "url('/public/first-bg.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;
