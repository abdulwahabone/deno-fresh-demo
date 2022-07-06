import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
      background: "#141a25",
    },
  },
};
if (IS_BROWSER) setup(config);
