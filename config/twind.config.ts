import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#ea3ba7",
        },
      },
    },

    fontFamily: {
      sans: ["Spline Sans", "sans-serif"],
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Spline Sans",
        fontWeight: "300",
        fontDisplay: "swap",
        src: [
          "url('/fonts/spline-sans-v7-latin-300.woff2') format('woff2')",
          "url('/fonts/spline-sans-v7-latin-300.woff') format('woff')",
          "url('/fonts/spline-sans-v7-latin-300.ttf') format('truetype')",
        ],
      },
      {
        fontFamily: "Spline Sans",
        fontWeight: "400",
        fontDisplay: "swap",
        src: [
          "url('/fonts/spline-sans-v7-latin-regular.woff2') format('woff2')",
          "url('/fonts/spline-sans-v7-latin-regular.woff') format('woff')",
          "url('/fonts/spline-sans-v7-latin-regular.ttf') format('truetype')",
        ],
      },
      {
        fontFamily: "Spline Sans",
        fontWeight: "700",
        fontDisplay: "swap",
        src: [
          "url('/fonts/spline-sans-v7-latin-700.woff2') format('woff2')",
          "url('/fonts/spline-sans-v7-latin-700.woff') format('woff')",
          "url('/fonts/spline-sans-v7-latin-700.ttf') format('truetype')",
        ],
      },
    ],
  },
};
if (IS_BROWSER) setup(config);
