module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: "all",
    content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          maxWidth: "100%",
          color: "theme(colors.gray.600)",
          a: {
            color: "theme(colors.secondary)",
            textDecoration: "none",
          },
          code: {
            color: "theme(colors.gray.700)",
          },
          h1: {
            color: "theme(colors.primary)",
          },
          h2: {
            color: "theme(colors.gray.700)",
          },

          // ...
        },
      },
    }),
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: "#101114",
        light: "#f3f5f6",
        primary: "#4653c6",
        secondary: "#c97858",
        dark: {
          100: "#aeb1c2",
          200: "#9a9dae",
          300: "#86899a",
          400: "#727586",
          500: "#5e6172",
          600: "#4a4d5e",
          700: "#36394a",
          800: "#222536",
          900: "#0e1122",
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "group-hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
};
