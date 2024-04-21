/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#fef5fb",
          "100": "#fde6f6",
          "200": "#feccee",
          "300": "#fea3df",
          "400": "#fc6ac8",
          "500": "#f53faf",
          "600": "#e51d8e",
          "700": "#c80e72",
          "800": "#a50f5d",
          "900": "#891250",
          "950": "#54032d",
        },
        secondary: {
          "50": "#f6fee7",
          "100": "#e9fccb",
          "200": "#d4f99d",
          "300": "#b7f165",
          "400": "#9ae536",
          "500": "#71bc15",
          "600": "#5da20e",
          "700": "#477c0f",
          "800": "#3b6212",
          "900": "#335314",
          "950": "#182e05",
        },
      },
      height: {
        "screen-minus-header": "calc(100vh - var(--header-height))",
        "header-height": "var(--header-height)",
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    iconsPlugin({
      collections: getIconCollections(["material-symbols"]),
    }),
  ],
};

