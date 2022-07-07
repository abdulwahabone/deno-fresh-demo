/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NavLinks {
  children: string;
  href: string;
}

export default function navLinks({ children, href }: NavLinks) {
  return (
    <a
      href={href}
      class={tw
        `mx-2 cursor-pointer pb-2 leading-4 border-b-2 border-black hover:border-pink-500`}
    >
      {children}
    </a>
  );
}
