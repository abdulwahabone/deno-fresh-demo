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
  const invertClass = invert
    ? "md:flex-row-reverse flex-col-reverse"
    : "flex-col-reverse";

  return (
    <div
      class={tw
        `flex md:flex-row flex-col mx-auto ${invertClass} max-w-[1200px] pt-[100px] pb-[50px]`}
    >
      <div
        class={tw
          `flex flex-col justify-center md:w-1/2 mt-[50px] mx-[20px] md:mx-auto md:mt-auto`}
      >
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
      <div
        class={tw
          `flex flex-col justify-center items-center mx-5 md:mx-auto md:w-1/2`}
      >
        <img
          alt="project image"
          width="400px"
          height="300px"
          class={tw`rounded-2xl hidden md:block`}
          src={asset("/projectA.jpeg")}
        />
        <img
          alt="project image"
          width="320px"
          height="240px"
          class={tw`rounded-2xl block md:hidden`}
          src={asset("/projectAsmall.jpeg")}
        />
      </div>
    </div>
  );
};

Project.defaultProps = defaultProps;

export default Project;
