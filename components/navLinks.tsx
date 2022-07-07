/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NavLinks {
  children: string;
}

export default function navLinks(props: NavLinks) {
  return (
    <nav
      class={tw
        `mx-2 cursor-pointer pb-2 leading-4 border-b-2 border-black hover:border-pink-500`}
    >
      {props.children}
    </nav>
  );
}
