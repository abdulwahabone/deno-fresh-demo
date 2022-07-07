/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
import IconButton, { IconType } from "../../icons/iconButton.tsx";

export default function Footer() {
  return (
    <header class={tw`bg-black w-full`}>
      <div
        class={tw
          `mx-auto flex flex-col text-white justify-center items-center font-sans py-[100px]`}
      >
        <img
          width="150px"
          class={tw` z-[1]`}
          src={asset("/wahab.svg")}
        />
        <div class={tw`-mt-4 flex`}>
          <IconButton
            iconType={IconType.github}
            href="https://github.com/abdulwahabone"
          />
          <IconButton
            iconType={IconType.linkedin}
            href="https://www.linkedin.com/in/abdul-wahab-8aa61769/"
          />
          <IconButton
            iconType={IconType.twitter}
            href="https://twitter.com/Abdul_wahab_one"
          />
        </div>
      </div>
    </header>
  );
}
