import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#db522f",
        purple: "#151f6c",
        offwhite: "#f5f6f8",
        dark: "#383839",
        lightroyalpurple: "#444b89",
        royalpurple: "#1e2772",
        yellow: "#fcce04",
        transparentpurple: "#383f81"
      },
    },
  },
  plugins: [],
};
export default config;
