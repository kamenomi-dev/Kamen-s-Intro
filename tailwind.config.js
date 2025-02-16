// import loadingSymbol from "./tailwindcss/loadingSymbol.json";
import plugin from "tailwindcss/plugin";
import { withTV } from "tailwind-variants/transformer";

/** @type {import('tailwindcss').Config} */

export default withTV({
  content: ["./index.html", "./src/**/*.tsx", "./src/components/**/*.tsx"],
  plugins: [
    plugin(({addBase}) => {
      addBase({
        ".font-segoe": {
          fontFamily: "Segoe UI Veriable Display, Segoe UI Veriable, Text Segoe UI"
        },
        ".font-segoe-small": {
          fontFamily: "Segoe UI Veriable Small, Segoe UI Veriable Text, Segoe UI"
        }
      });
    })
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["'Segoe UI Veriable Display'","'Segoe UI Veriable'", "'Text Segoe UI'"],
        "segoe-small": ["'Segoe UI Veriable small'","'Segoe UI Veriable Text'", "'Segoe UI'"]
      },
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
      // ...loadingSymbol
    },
  },
});
