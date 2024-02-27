import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "clamp-hero-title": "clamp(3rem, 5vw, 4.75rem)",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        oswald: ['var(--font-oswald)'],
        helvetica: 'Helvetica Neue, sans-serif',
      },
      backgroundImage: {
        "grey-light": "var(--foreground-rgb)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
