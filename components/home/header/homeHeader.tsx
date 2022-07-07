/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import DarkSection from "../../darkSection.tsx";
import HeaderNav from "./headerNav.tsx";
import Memoji from "./memoji.tsx";

const h1 = apply`font-sans font-bold mt-[50px] text-white max-w-[875px] tracking-tight
  lg:text-[92px] text-6xl leading-[1.1] text-center`;

export default function HomeHeader() {
  return (
    <div class={tw`h-screen flex flex-col`}>
      <HeaderNav />
      <DarkSection>
        <div class={tw`flex flex-col items-center`}>
          <Memoji />
          <h1
            class={tw(h1)}
          >
            <span>Building</span>
            <span class={tw`text-pink-500`}>&nbsp;Performant & Beautiful</span>
            <span>&nbsp;Apps.</span>
          </h1>
        </div>
      </DarkSection>
    </div>
  );
}
