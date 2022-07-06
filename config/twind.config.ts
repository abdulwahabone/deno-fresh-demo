import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        primary: "#ea3ba7",
      },
    },
    fontFamily: {
      title: ["Spline Sans", "sans-serif"],
    },
  },
  preflight: {
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@700&display=swap');`,
  },
};
if (IS_BROWSER) setup(config);
