import Navigation from "../Navigation/Navigation";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SocialLinks from "../SocialLinks/SocialLinks";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <PersonalInfo />
      <Navigation />
      <SocialLinks />
    </header>
  );
}

export default Header;
