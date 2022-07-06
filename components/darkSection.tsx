/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

interface DarkSection {
  children: any;
}

export default function DarkSection(props: DarkSection) {
  return (
    <section class={tw`bg-black p-20 w-full`}>
      <div class={tw`mx-auto w-[900px]`}>
        {props.children}
      </div>
    </section>
  );
}
