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
        marqueeText: {
          "0%, 100%": { transform: "translateX(-75%)" },
          "50%": { transform: "translateX(75%)" }, // move right
        },
      },
      animation: {
        marqueekeynotesession: "marquee 35s linear infinite", // normal
        marqueeimg: "marquee 240s linear infinite",           // slow
        marqueeFaster: "marquee 5s linear infinite",          // fast
        marqueeText: "marqueeText 6s ease-in-out infinite",   // left-right bounce
      },
    },
  },
  plugins: [],
};
