/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GithubIcon from "./icons/githubIcon.tsx";
import TwitterIcon from "./icons/twitterIcon.tsx";
import LinkedinIcon from "./icons/linkedinIcon.tsx";

export enum IconType {
  github = "github",
  twitter = "twitter",
  linkedin = "linkedin",
}

interface IconProps {
  iconType: IconType;
  href: string;
}

export default function IconButton({ iconType, href }: IconProps) {
  const icon = () => {
    switch (iconType) {
      case IconType.github: {
        return <GithubIcon />;
      }
      case IconType.twitter: {
        return <TwitterIcon />;
      }
      case IconType.linkedin: {
        return <LinkedinIcon />;
      }
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class={tw`z-[1] cursor-pointer hover:text-pink-500 mx-1`}
    >
      {icon()}
    </a>
  );
}
