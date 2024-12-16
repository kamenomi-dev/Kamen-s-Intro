/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          15: "#212122",
          20: "#2B2B2B",
          25: "#3A3A3A",
          30: "#444443",
          35: "#505050",
          40: "#5D5C5B",
          45: "#6B6A69",
          50: "#767675",
          55: "#828282",
          60: "#8F8F8E",
          65: "#9E9F9E",
          70: "#ACADAC",
          75: "#BABABA",
          80: "#C9C8C7",
          85: "#D6D6D4",
          90: "#E2E3E0",
        },
      },
      backgroundColor: {
        "navigation-item-normal": "white",
        "navigation-item-active": "#ffffffA2",
      },
    },
  },
  plugins: [],
};
