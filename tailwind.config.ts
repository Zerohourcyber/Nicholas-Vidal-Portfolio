import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midjourney-inspired professional palette
        cyber: {
          50: "#E8F2F7",
          100: "#C5DEF0",
          200: "#9DC8E8",
          300: "#6FB1DF",
          400: "#4A9DD9",
          500: "#2589D3",
          600: "#1E74BA",
          700: "#185D93",
          800: "#12466C",
          900: "#0A192F",
        },
        steel: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        accent: {
          50: "#FFF9E6",
          100: "#FFF0C2",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#FFB800",
          600: "#E6A600",
          700: "#B38200",
          800: "#805E00",
          900: "#4D3800",
        },
        sapphire: {
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#AED7FF",
          300: "#85C3FF",
          400: "#5CAFFF",
          500: "#339BFF",
          600: "#0A7FE6",
          700: "#0863B3",
          800: "#064780",
          900: "#042B4D",
        },
        sunset: {
          50: "#FFF5E6",
          100: "#FFE7CC",
          200: "#FFD199",
          300: "#FFBB66",
          400: "#FFA533",
          500: "#FF8F00",
          600: "#E68000",
          700: "#B36300",
          800: "#804600",
          900: "#4D2A00",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 15px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.18), 0 8px 30px rgba(0, 0, 0, 0.12)",
        section: "0 -1px 0 rgba(0, 0, 0, 0.05)",
        "glow-accent": "0 0 40px rgba(255, 184, 0, 0.3), 0 0 80px rgba(255, 184, 0, 0.15)",
        "glow-blue": "0 0 40px rgba(51, 155, 255, 0.3), 0 0 80px rgba(51, 155, 255, 0.15)",
        depth: "0 20px 70px -10px rgba(0, 0, 0, 0.3), 0 10px 40px -5px rgba(0, 0, 0, 0.2)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 20% 30%, rgba(51, 155, 255, 0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(255, 184, 0, 0.15) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(30, 116, 186, 0.12) 0px, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

