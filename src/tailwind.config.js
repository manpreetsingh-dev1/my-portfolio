// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#2E2E2E",     // Dark text
        mutedGold: "#C9A66B",    // Accent buttons / highlights
        warmBeige: "#F4E3C3",    // Secondary background / hover
        softCream: "#FFF8F0",    // Main background
        vintageGrey: "#A8A29E",  // Subtle text / secondary
        offWhite: "#FDFCF6"      // Body text / cards
      },
    },
  },
  plugins: [],
}