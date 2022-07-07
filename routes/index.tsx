/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import HomeHeader from "../components/home/header/homeHeader.tsx";
import Project from "../components/home/projects/project.tsx";
import Footer from "../components/home/footer/footer.tsx";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
