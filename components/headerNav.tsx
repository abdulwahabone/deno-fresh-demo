/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
import NavLinks from "./navLinks.tsx";

export default function HeaderNav() {
  return (
    <header class={tw`bg-black w-full`}>
      <div
        class={tw
          `mx-auto flex text-white justify-between items-center font-sans py-6 max-w-[900px]`}
      >
        <img
          width="150px"
          class={tw` z-[1]`}
          src={asset("/wahab.svg")}
        />
        <div class={tw`flex`}>
          <NavLinks>About</NavLinks>
          <NavLinks>Projects</NavLinks>
          <NavLinks>Blogs</NavLinks>
          <NavLinks>Testimonials</NavLinks>
        </div>
        <NavLinks>Contact</NavLinks>
      </div>
    </header>
  );
}
