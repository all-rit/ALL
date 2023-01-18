/* eslint-disable no-undef */
/* eslint-disable max-len */
module.exports = {
  prefix: "tw-",
  content: ["../client/src/**/*.{js,jsx}"],

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
      dark: "#000000",
      white: "#FFFFFF",
      bgwhite: "#F3F3F3",
      bgdark: "#23022E",
      darkLine: "#868e96",
      labYellow: "#10002B",
      labGreen: "#7B7B7B",
      labBlue: "#A39CB0",
      darkGreen: "#0c3515",
      lightGreen: "#47ff72",
      brightRed: "#dc2626",
    },
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
