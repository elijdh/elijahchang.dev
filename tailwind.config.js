module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#fafafa",
          dark: "#0a0a0a",
        },
        foreground: {
          DEFAULT: "#141414",
          dark: "#f5f5f5",
        },
        muted: {
          DEFAULT: "#5b5b63",
          dark: "#a1a1aa",
        },
        border: {
          DEFAULT: "#e1e1e4",
          dark: "#1f1f1f",
        },
        accent: {
          DEFAULT: "#e0643a",
          dark: "#e0754b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
