/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cf2e2e", // Red
        secondary: "#FFD700", // Gold
        third: "#1B305C", // new blue
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Adjust based on CSJMU font
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marqueekeynotesession: "marquee 32s linear infinite",      // normal
        marqueeimg: "marquee 150s linear infinite",  // 2x faster
        marqueeFaster: "marquee 5s linear infinite", // 4x faster
      },
    },
  },
  plugins: [],
};

