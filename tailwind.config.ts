import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0A1628", 2: "#0d1b30", 3: "#102441" },
        accent: { DEFAULT: "#00D4FF", 2: "#00b4dc" },
        ink: { DEFAULT: "#e6ecf5", 2: "#9fb0c8", 3: "#5e708a" },
        line: { DEFAULT: "rgba(255,255,255,0.08)", 2: "rgba(255,255,255,0.14)" },
        success: "#3ddc97",
        warn: "#ffb547",
        danger: "#ff6b6b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(0,212,255,0.35)",
        card: "0 30px 80px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
