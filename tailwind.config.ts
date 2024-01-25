import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
  },
  plugins: [],
};
export default config;
