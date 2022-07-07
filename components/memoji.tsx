/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";

export default function Memoji() {
  return (
    <div class={tw`flex flex-col mx-auto w-[250px]`}>
      <img
        width="250px"
        height="250px"
        class={tw` z-[1]`}
        src={asset("/memoji.png")}
      />
      <div
        class={tw
          `rounded w-[200px] h-[200px] ml-[15px] mt-[-190px] bg-pink-500 rounded-full`}
      />
    </div>
  );
}
