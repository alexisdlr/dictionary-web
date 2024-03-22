import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "absolute-dark": "#050505",
        "rich-black": "#2D2D2D",
        "pitch-black": "#1F1F1F",
        "dim-gray": "#3A3A3A",
        "silver": "#757575",
        "light-gray": "#E9E9E9",
        "white-smoke": "#F4F4F4",
        "purple": "#A445ED",
        "red-dark": "#FF5252"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
