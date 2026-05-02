import type { Config } from "tailwindcss";

// Tokens lifted from `Connectors x Steve Jobs/design/tokens.css`.
// Same palette as agency/internal-tools/riley-dashboard/tailwind.config.ts,
// extended with the Steve Jobs design's gradients, shadows, radii, and motion.
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          mid: "#0D2F5C",
          light: "#1A4A8C",
        },
        accent: {
          DEFAULT: "#4BA3D4",
          light: "#7EC8E3",
        },
        bg: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F9FF",
        },
        ink: {
          DEFAULT: "#0B1F3A",
          soft: "#4A6FA5",
          muted: "#8BAFC8",
        },
        line: "#D1E3F0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grad-hero":
          "linear-gradient(135deg, #0B1F3A 0%, #0D2F5C 55%, #1A4A8C 100%)",
        "grad-accent":
          "linear-gradient(135deg, #4BA3D4 0%, #7EC8E3 100%)",
        "grad-glow-1":
          "radial-gradient(ellipse 60% 60% at 75% 40%, rgba(75,163,212,0.18) 0%, transparent 65%)",
        "grad-glow-2":
          "radial-gradient(ellipse 40% 40% at 20% 70%, rgba(126,200,227,0.10) 0%, transparent 60%)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        "card-hover":
          "0 2px 8px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)",
        cta: "0 4px 16px rgba(75,163,212,0.35)",
        "cta-hover": "0 8px 28px rgba(75,163,212,0.40)",
        large: "0 8px 32px rgba(0,0,0,0.15)",
        nav: "0 1px 0 rgba(11,31,58,0.08)",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        lg: "16px",
        pill: "100px",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tightest2: "-0.04em",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "200ms",
        base: "250ms",
        slow: "350ms",
        reveal: "650ms",
      },
      maxWidth: {
        container: "1100px",
      },
      fontSize: {
        eyebrow: ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
    },
  },
  plugins: [],
};
export default config;
