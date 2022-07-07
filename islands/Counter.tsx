/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const btn = tw
    `md:mx-[50px] w-[75px] h-[75px] text-white font-sans font-bold text-6xl leading-[75px] bg-black rounded-full hover:bg-pink-500`;
  return (
    <div class={tw`flex justify-center mx-auto items-center w-full py-[100px]`}>
      <button
        class={btn}
        onClick={() =>
          setCount(count - 1)}
        disabled={!IS_BROWSER}
      >
        -
      </button>
      <p
        class={tw
          `font-sans font-bold text-pink-500 lg:text-[92px] text-6xl text-center w-[200px]`}
      >
        {count}
      </p>
      <button
        class={btn}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >
        +
      </button>
    </div>
  );
}
