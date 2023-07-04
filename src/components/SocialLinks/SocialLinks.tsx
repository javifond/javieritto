import socialLinks from "../../data/social-links.json";

import "./SocialLinks.css";

interface ISocialLinks {
  name: string;
  link: string;
}

function SocialLinks() {
  const links: ISocialLinks[] = socialLinks;
  return (
    <ul className="social-links">
      {links.map(({ name, link }, i) => (
        <li key={`social-link-${i}`}>
          <a href={link} target="_blank">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
