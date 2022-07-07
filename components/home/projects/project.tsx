/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";

interface projectProps {
  invert?: boolean;
}

const defaultProps: projectProps = {
  invert: false,
};

const Project = ({ invert }: projectProps) => {
  const invertClass = invert ? "flex-row-reverse" : "";

  return (
    <div class={tw`flex mx-auto ${invertClass} max-w-[1200px] pt-[100px] pb-[50px]`}>
      <div class={tw`flex flex-col justify-center w-1/2`}>
        <span
          class={tw
            `text-pink-500 font-sans font-normal uppercase text-[16px] mb-2.5`}
        >
          Project abcd
        </span>
        <h2 class={tw`font-sans font-bold text-black text-[40px] leading-10`}>
          An Amazing Project
        </h2>
        <p
          class={tw
            `font-sans font-light leading-[34px] text-xl whitespace-pre-wrap mt-3 tracking-wide`}
        >
          Phasellus vel eleifend mauris, id pretium erat. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Donec id ultricies diam. Mauris vehicula mattis odio, eget
          malesuada augue iaculis vitae. Pellentesque consequat neque quis
          faucibus volutpat.
        </p>
      </div>
      <div class={tw`flex flex-col justify-center items-center w-1/2`}>
        <img
          width="400px"
          class={tw`rounded-2xl`}
          src={asset("/projectA.jpeg")}
        />
      </div>
    </div>
  );
};

Project.defaultProps = defaultProps;

export default Project;
