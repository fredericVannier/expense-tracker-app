/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#1c1c1e",
          secondary: "#2c2c2e",
          card: "#1C2030",
          border: "#1c1c1e",
        },
        accent: {
          primary: "#6366F1",
          soft: "#818CF8",
        },
        text: {
          primary: "#E5E7EB",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        success: "#22C55E",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.04)",
        glow: "0 0 80px rgba(99,102,241,0.35)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        heading: ["1.25rem", { fontWeight: "600" }],
        label: ["0.75rem", { letterSpacing: "0.08em" }],
      },
    },
  },
  plugins: [],
};
