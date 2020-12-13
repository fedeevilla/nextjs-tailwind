module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  corePlugins: {
    fontFamily: false,
    pointerEvents: true,
  },
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          20: "#f7f9fa",
          30: "#e5e9ec",
          40: "#d0d6da",
          50: "#9ca8b1",
          60: "#747c84",
          80: "#343a40",
          100: "#1c1f22",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
