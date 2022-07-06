/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import DarkSection from "../components/darkSection.tsx";

export default function Home() {
  return (
    <DarkSection>
      <h1 class={tw`my-6 font-title text-[92px] text-white max-w-[875px] tracking-tight`}>
        <span>Building</span>
        <span class={tw`text-primary`}> Performant & Beautiful</span>
        <span> things.</span>
      </h1>
    </DarkSection>
  );
}
