/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

interface DarkSection {
  children: any;
}

export default function DarkSection(props: DarkSection) {
  return (
    <section class={tw`bg-black h-full`}>
      <div class={tw`mx-auto py-6 max-w-[900px] h-full`}>
        {props.children}
      </div>
    </section>
  );
}
