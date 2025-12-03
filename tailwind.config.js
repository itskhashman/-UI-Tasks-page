/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#C9B57A",
        "sidebar-light": "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "440px",
        xxs: "340px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
