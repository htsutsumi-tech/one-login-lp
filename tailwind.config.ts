import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "Noto Serif JP",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        neutral: {
          50: "#F9F9F9",
          100: "#F3F3F3",
          150: "#EBEBEB",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
      letterSpacing: {
        widest: "0.2em",
        "extra-wide": "0.15em",
      },
      lineHeight: {
        "extra-relaxed": "2.0",
        "japanese": "1.9",
      },
      maxWidth: {
        "8xl": "88rem",
        "content": "68rem",
      },
      transitionDuration: {
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};
export default config;
