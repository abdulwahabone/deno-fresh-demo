/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import HeaderNav from "../components/home/header/headerNav.tsx";
import Memoji from "../components/home/header/memoji.tsx";

const url = "https://meme-api.herokuapp.com/gimme/dankmemes";

export interface Meme {
  title: string;
  url: string;
}

export const handler: Handlers<Meme | null> = {
  async GET(_, ctx) {
    const resp = await fetch(url);
    if (resp.status === 200) {
      const jokeData: Meme = await resp.json();
      return ctx.render(jokeData);
    }
    return ctx.render(null);
  },
};

const h1 = apply`font-sans font-bold mt-[50px] text-white max-w-[875px] tracking-tight
  md:text-6xl lg:text-[92px] text-4xl leading-[1.5] md:leading-[1.1] text-center mx-5`;

export default function Memes({ data }: PageProps<Meme | null>) {
  return (
    <div class={tw`min-h-screen w-full bg-black flex flex-col`}>
      <HeaderNav />
      <section class={tw`mx-auto py-6 max-w-[900px]`}>
        <div class={tw`flex flex-col items-center`}>
          <Memoji />
          <h1
            class={tw(h1)}
          >
            <span class={tw`text-pink-500`}>&nbsp;SSR</span>
            <span>&nbsp;random</span>
            <span class={tw`text-pink-500`}>&nbsp;Memes</span>
          </h1>
        </div>
        <p
          class={tw
            `mx-[20px] md:mx-auto mt-[50px] mb-[30px] md:leading-[60px] text-[20px] md:text-[50px] block text-center text-white font-sans font-light whitespace-pre-wrap tracking-wide`}
        >
          {data?.title}
        </p>
        <img
          alt="meme"
          class={tw`mx-auto mb-[100px]`}
          src={data?.url}
        />
      </section>
    </div>
  );
}
