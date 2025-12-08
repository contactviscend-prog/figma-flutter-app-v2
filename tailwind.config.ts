import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9333EA',
        secondary: '#7C3AED',
      },
    },
  },
  plugins: [],
} satisfies Config
