/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px" /* min-width: 640px (mobile) */,
      md: "768px" /* tablet */,
      lg: "1024px" /* laptop and up */,
      xl: "1280px",
      // 2xl: "1536px"
    },
    extend: {
      colors: {
        primaryColor: "#ecf0f5",
        pink: "#f36a8d",
        green: "#20ca66",
        orange: "#fa9161",
        text_1: "#79808a",
        text_2: "#181c31",
      },
      backgroundColor: {
        bg_1: "#ffffff",
        bg_2: "#f4f7fa",
        bg_3: "#ecf0f5",
      },
      boxShadow: {
        custom:
          "0px 6px 90px rgba(8, 14, 40, 0.04)",
      },
      keyframes: {},
      animation: {},
      fontFamily: {
        outfit: ["Outfit, sans-serif"],
        inter: ["Inter, sans-serif"],
      },
      fontSize: {
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
  },
  plugins: [],
};
