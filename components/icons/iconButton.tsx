/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GithubIcon from "./githubIcon.tsx";
import TwitterIcon from "./twitterIcon.tsx";
import LinkedinIcon from "./linkedinIcon.tsx";

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
  let ariaLabel = "social link";

  const icon = () => {
    switch (iconType) {
      case IconType.github: {
        ariaLabel = "github link";
        return <GithubIcon />;
      }
      case IconType.twitter: {
        ariaLabel = "twitter link";
        return <TwitterIcon />;
      }
      case IconType.linkedin: {
        ariaLabel = "linkedin link";
        return <LinkedinIcon />;
      }
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      class={tw`z-[1] cursor-pointer hover:text-pink-500 mx-1`}
    >
      {icon()}
    </a>
  );
}
