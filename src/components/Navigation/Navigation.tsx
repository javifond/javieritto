import navigationData from "../../data/navigation.json";

import "./Navigation.css";

interface INavigation {
  name: string;
  route: string;
}

function Navigation() {
  const navigationLinks: INavigation[] = navigationData;
  return (
    <nav className="navigation">
      <ul className="navigation-container">
        {navigationLinks.map(({ name }, i) => (
          <li key={`navLink-${i}`}>{name}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
