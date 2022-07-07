/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import DarkSection from "../components/darkSection.tsx";
import HeaderNav from "../components/headerNav.tsx";
import Memoji from "../components/memoji.tsx";

const h1 = apply
  `font-sans mt-[50px] mb-[200px] text-white max-w-[875px] tracking-tight
  lg:text-[92px] text-6xl leading-[1.1] text-center`;

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <DarkSection>
        <Memoji />
        <h1
          class={tw(h1)}
        >
          <span>Building</span>
          <span class={tw`text-pink-500`}>&nbsp;Performant & Beautiful</span>
          <span>&nbsp;Apps.</span>
        </h1>
      </DarkSection>
    </div>
  );
}
