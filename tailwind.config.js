/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hightLight: "#66b3ff",
        bluef1: "#1878f3",
        borderLineBlue: "#81cff5",
        colorDetails: "#81cff5",
        bgPrimary: "#091929",
        inputActive: "#a2f7c8",
        textPrimary: "#b2bac2",
        lightGrey: "rgba(215, 215, 215)",
        bgDetails: "#f9f9f9",
        backgroundBefore: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
