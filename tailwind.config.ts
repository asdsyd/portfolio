import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '15px -15px 35px -5px rgba(0, 0, 0, 0.25)',
        '4xl': '15px 15px 5px -5px rgba(0, 0, 0, 0.25)',
        'skill': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
