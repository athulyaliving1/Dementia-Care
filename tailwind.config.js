module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ss: "320px",
      // => @media (min-width: 640px) { ... }

      sm: "375px",
      sl: "425px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      Helvetica: ["Open Sans", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};