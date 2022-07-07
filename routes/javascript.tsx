/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import DarkSection from "../components/darkSection.tsx";
import HeaderNav from "../components/home/header/headerNav.tsx";
import Memoji from "../components/home/header/memoji.tsx";
import Counter from "../islands/Counter.tsx"

const h1 = apply
  `font-sans font-bold mt-[50px] text-white max-w-[875px] tracking-tight
  lg:text-[92px] text-6xl leading-[1.1] text-center`;

export default function Javascript() {
  return (
    <div class={tw`mb-[100px]`}>
      <div class={tw`h-screen flex flex-col`}>
        <HeaderNav />
        <DarkSection>
          <div class={tw`flex flex-col items-center`}>
            <Memoji />
            <h1
              class={tw(h1)}
            >
              <span>Lets</span>
              <span class={tw`text-pink-500`}>&nbsp;Play</span>
              <span>&nbsp;with some</span>
              <span class={tw`text-pink-500`}>&nbsp;Javascript</span>
            </h1>
          </div>
        </DarkSection>
      </div>
      <Counter start={50}  />
    </div>
  );
}
