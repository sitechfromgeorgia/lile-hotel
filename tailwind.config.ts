import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgian: ["Noto Sans Georgian", "sans-serif"],
      },
      colors: {
        primary: "#1E88E5",
        accent: "#D4A574",
        nature: "#27AE60",
        sea: "#0288D1",
      },
    },
  },
  plugins: [],
};

export default config;
