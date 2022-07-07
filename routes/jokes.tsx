/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import DarkSection from "../components/darkSection.tsx";
import HeaderNav from "../components/home/header/headerNav.tsx";
import Memoji from "../components/home/header/memoji.tsx";

const url = "https://api.chucknorris.io/jokes/random";

export interface Joke {
  value: string;
}

export const handler: Handlers<Joke | null> = {
  async GET(_, ctx) {
    const resp = await fetch(url);
    if (resp.status === 200) {
      const jokeData: Joke = await resp.json();
      return ctx.render(jokeData);
    }
    return ctx.render(null);
  },
};

const h1 = apply`font-sans font-bold mt-[50px] text-white max-w-[875px] tracking-tight
  md:text-6xl lg:text-[92px] text-4xl leading-[1.5] md:leading-[1.1] text-center mx-5`;

export default function Jokes({ data }: PageProps<Joke | null>) {
  return (
    <div class={tw``}>
      <div class={tw`h-screen min-h-screen flex flex-col`}>
        <HeaderNav />
        <DarkSection>
          <div class={tw`flex flex-col items-center`}>
            <Memoji />
            <h1
              class={tw(h1)}
            >
              <span class={tw`text-pink-500`}>&nbsp;SSR</span>
              <span>&nbsp;random</span>
              <span class={tw`text-pink-500`}>&nbsp;Jokes</span>
            </h1>
          </div>
          <p class={tw`mx-5 md:mx-auto text-2xl md:text-[50px] md:leading-[60px] mt-[50px] md:mt-[100px]  mb-[100px] block text-center text-white font-sans font-light whitespace-pre-wrap tracking-wide border-2 border-white rounded-2xl p-[20px]`}>
            {data?.value}
          </p>
        </DarkSection>
      </div>
    </div>
  );
}
