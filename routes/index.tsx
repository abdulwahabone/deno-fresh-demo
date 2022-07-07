/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import HomeHeader from "../components/home/header/homeHeader.tsx";


const h1 = apply
  `font-sans mt-[50px] mb-[200px] text-white max-w-[875px] tracking-tight
  lg:text-[92px] text-6xl leading-[1.1] text-center`;

export default function Home() {
  return (
    <div>
     <HomeHeader />
     <div class={tw`h-screen`}></div>
    </div>
  );
}
