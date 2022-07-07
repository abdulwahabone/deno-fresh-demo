/** @jsx h */
import { Fragment, h } from "preact";
import { Head , asset} from "$fresh/runtime.ts";

import HomeHeader from "../components/home/header/homeHeader.tsx";
import Project from "../components/home/projects/project.tsx";
import Footer from "../components/home/footer/footer.tsx";

const title = "Playing with Deno Fresh";
const desc = "Hi, I'm Wahab. I'm testing out Deno's new web framework, Fresh!";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={desc}
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={desc}
        />
        <meta
          property="og:image"
          content={asset("/meta.jpg")}
        />
      </Head>
      <HomeHeader />
      <Project />
      <Project invert />
      <Project />
      <Project invert />
      <Project />
      <Project invert />
      <Project />
      <Project invert />
      <Footer />
    </Fragment>
  );
}
