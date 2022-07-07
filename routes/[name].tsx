/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import DarkSection from "../components/darkSection.tsx";
import HeaderNav from "../components/home/header/headerNav.tsx";
import Memoji from "../components/home/header/memoji.tsx";

const h1 = apply`font-sans font-bold mt-[50px] text-white max-w-[875px] tracking-tight
  md:text-6xl lg:text-[92px] text-4xl leading-[1.5] md:leading-[1.1] text-center mx-5`;

export default function DynamicPage(props: PageProps) {
  return (
    <div class={tw`h-screen flex flex-col`}>
      <HeaderNav />
      <DarkSection>
        <div class={tw`flex flex-col items-center`}>
          <Memoji />
          <h1
            class={tw(h1)}
          >
            <span>This is</span>
            <span class={tw`text-pink-500`}>&nbsp;{props.params.name}</span>
            <span>&nbsp;Page.</span>
            <span><br />Its dynamic</span>
          </h1>
        </div>
      </DarkSection>
    </div>
  );
}
