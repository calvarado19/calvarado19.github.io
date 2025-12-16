/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#0b1021",
        smoke: "#0f172a",
        electric: "#60a5fa",
        mint: "#67e8f9",
        sand: "#e2e8f0",
      },
      boxShadow: {
        soft: "0 10px 50px -15px rgba(103, 232, 249, 0.35)",
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
