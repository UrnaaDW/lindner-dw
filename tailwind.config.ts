import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C41E3A",
          black: "#1A1A1A",
          gold: "#FFD700",
          gray: "#666666",
          light: "#F8F8F8",
          border: "#E8E8E8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        "site": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
