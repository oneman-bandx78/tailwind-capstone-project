/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "640px", // min-width: 640px (mobile)
      md: "768px", // tablet
      lg: "1024px", // laptop and up
      xl: "1280px",
      // 2xl: "1536px"
    },
    extend: {
      colors: {
        primaryColor: "#4e6bff",
        pink: "#f36a8d",
        green: "#20ca66",
        orange: "#fa9161",
        textTitle: "#181c31",
        text_1: "#79808a",
        text_2: "#181c31",
      },
      backgroundColor: {
        bg_1: "#fdfdfd",
        bg_2: "#f4f7fa",
        bg_3: "#ecf0f5",
        bgPrimary: "#4e6bff",
        bgDark: "#181c31",
        bgCardDark: "#1c2136",
        bgOfferCardDark: "#181c31",
      },
      boxShadow: {
        customNav: "5px 1px 2px 0px #79808a61",
        customNavDark: "1px 1px 1px #ffffff78",
        customService: "0px 0px 20px 0px #8080800f",
        customeButton: "1px 3px 7px 3px #cfcfe121",
      },
      keyframes: {
        bannerTextToRight: {
          "0%": { transform: "translateX(-10%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        move: {
          "50%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        bannerTextToRightAni: "bannerTextToRight 1.1s ease-in",
        scaleAni: "scale 1s linear infinite",
        moveAni: "move 30s linear infinite",
      },
      fontFamily: {
        outfit: ["Outfit, sans-serif"],
        inter: ["Inter, sans-serif"],
      },
      fontSize: {},
      backgroundImage: {
        "custom-shape": "url('/assets/shape-08.svg')",
      },
      backgroundPosition: {
        "custom-pos": "159px",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        // sm: "1rem",
      },
    },
  },
  plugins: [],
};
