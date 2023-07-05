import socialLinks from "../../data/social-links.json";
import Icon from "@mdi/react";
import { socialIcons } from "./SocialLinks.constants";

import "./SocialLinks.css";

interface ISocialLinks {
  name: string;
  link: string;
}

interface SocialIconProps {
  name: string;
}

type SocialIconKey = keyof typeof socialIcons;

function SocialIcon({ name }: SocialIconProps) {
  const path = socialIcons[name as SocialIconKey];

  return (
    <div className="social-link-container">
      <Icon className="social-icon" path={path} title={name} />
      <span className="social-name">{name}</span>
    </div>
  );
}

function SocialLinks() {
  const links: ISocialLinks[] = socialLinks;
  return (
    <ul className="social-links">
      {links.map(({ name, link }, i) => (
        <li key={`social-link-${i}`}>
          <a href={link} target="_blank" rel="noreferrer">
            <SocialIcon name={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
