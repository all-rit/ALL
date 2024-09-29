const plugin = require("tailwindcss/plugin");

/* eslint-disable no-undef */
/* eslint-disable max-len */
module.exports = {
  prefix: "tw-",
  content: ["../client/src/**/*.{js,jsx}"],
  important: true,
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "15xl": "10rem",
    },
    fontFamily: {
      sans: [
        "Avenir",
        "sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
      ],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      bgwhite: "#F3F3F3",
      bgdark: "#23022E",
      darkLine: "#868e96",
      labGray: "#616161",
      labLightGray: "#E5E2E2",
      labYellow: "#ffc334",
      labGreen: "#7B7B7B",
      labBlue: "#0d28bc",
      darkGreen: "#0c3515",
      lightGreen: "#47ff72",
      brightRed: "#dc2626",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        calibri: ["Calibri", "sans-serif"],
      },
      colors: {
        primary: {
          yellow: "#FACE35",
          blue: "#0144D5",
        },
        secondary: {
          black: "#000000",
          gray: "#CECECE",
          white: "#FFFFFF",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-light":
          "linear-gradient(280.39deg, rgba(72, 0, 194, 0.9) 0%, rgba(72, 0, 194, 1) 100%);",
        "hero-dark":
          "linear-gradient(280.39deg, rgba(72, 0, 194, 0.9) 0%, rgba(72, 0, 194, 1) 100%);",
      },
      height: {
        128: "31rem",
      },
      keyframes: {
        reducedBounce: {
          "20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": {
            transform: "translateY(-8px)",
            animationTimingFunction: "cubic-bezier(0.5, 0.05, 1, 0.5)",
          },
          "60%": {
            transform: "translateY(-5px)",
            animationTimingFunction: "cubic-bezier(0.5, 0.05, 1, 0.5)",
          },
        },
      },
      animation: {
        "reduced-bounce": `reducedBounce 2s linear infinite`,
      },
      zIndex: {
        1: "1",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group", "responsive", "hover", "focus", "reduced-bounce"],
      bg: ["group", "responsive", "hover", "focus"],
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".title-styling-name": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: "2rem",
          fontWeight: theme("fontWeight.bold"),
        },
        "sub-title-styling-name": {
          fontFamily: theme("fontFamily.calibri"),
          fontSize: "1.5rem",
          fontWeight: theme("fontWeight.normal"),
        },
        "body-styling-name": {
          font: theme("fontFamily.calibri"),
          fontSize: "1.125rem",
          fontWeight: theme("fontWeight.light"),
        },
      });
    }),
  ],
};
