const plugin = require("tailwindcss/plugin");

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
        "Calibri",
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
      lightBlue: "#5D90FE",
      mediumBlue: "#0143D0",
      darkGreen: "#0c3515",
      lightGreen: "#47ff72",
      brightRed: "#dc2626",
      darkGray: "#3d3d3d",
      success: "#369d2a",
      hoverSuccess: "#238418",
      error: "#d03c3c",
      transparent: "transparent",
    },
    extend: {
      borderWidth: {
        12: "12px",
      },
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
          gray: "#d3d3d3",
          white: "#FFFFFF",
        },
        transparent: "transparent",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        qubit:
          "linear-gradient(280.39deg, rgba(13, 40, 188, 1) 0%, rgba(255, 195, 52, 1) 100%)",
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
        infiniteScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-101.5%)" },
        },
        infiniteScrollRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(101.5%)" },
        },
      },
      animation: {
        "reduced-bounce": `reducedBounce 2s linear infinite`,
        "infinite-scroll": `infiniteScroll 25s linear infinite`,
        "infinite-scroll-right": `infiniteScrollRight 25s linear infinite`,
      },
      zIndex: {
        1: "1",
      },
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
  },
  variants: {
    extend: {
      animation: ["group", "responsive", "hover", "focus", "reduced-bounce"],
      bg: ["group", "responsive", "hover", "focus"],
      translate: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".title": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: "2rem",
          fontWeight: theme("fontWeight.bold"),
        },
        ".sub-title": {
          fontFamily: theme("fontFamily.calibri"),
          fontSize: "1.5rem",
          fontWeight: theme("fontWeight.medium"),
        },
        ".body-text": {
          fontFamily: theme("fontFamily.calibri"),
          fontWeight: theme("fontWeight.medium"),
          fontSize: "1.125rem",
          lineHeight: "1.6rem",
          textAlign: "left",
        },
        ".perspective-distant": {
          perspective: "1200px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".transform-3d": {
          transformStyle: "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    }),
  ],
};
