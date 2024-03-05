/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        min: "0.875rem",
        "4xxl": "2.5rem",
      }
    },
    screens: {
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xxl: "90rem",// 1440px
    },
  },
  plugins: [],
}

