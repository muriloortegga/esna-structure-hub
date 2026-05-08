import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        // Design System Specific
        void: "#1A1C1E",
        depth: "#1E293B",
        pale: "#F2F4F5",
        surf2: "#E2E8F0",
        white: {
          DEFAULT: "#F2F4F5",
          pure: "#FFFFFF" // Keeping pure white just in case something strictly needs #FFF
        },
        slate: "#64748B",
        black: "#1A1C1E",
        "border-sutil": "#E2E8F0",
        "border-emphasis": "#1E293B",
        surface: "#F2F4F5",
        mint: "#1A1C1E", // Changing mint to black to match the stark design
        highlight: "#1A1C1E"
      },
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
      },
      fontFamily: {
        sans: ['"Hilmar Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Hilmar Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        ui: ['"Hilmar Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.075em',
        tight: '-0.04em',
        normal: '-0.015em',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        deep: 'var(--shadow-deep)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.32, 0.72, 0, 1) both",
        "marquee": "marquee 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
