import navigationData from "../../data/navigation.json";

import "./Navigation.css";

interface INavigation {
  name: string;
  componentId: string;
}

function Navigation() {
  const navigationLinks: INavigation[] = navigationData;

  const onNavLinkClickHandler = (componentId: string) => {
    const element = document.getElementById(componentId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navigation">
      <ul className="navigation-container">
        {navigationLinks.map(({ name, componentId }, i) => (
          <li key={`navLink-${i}`}>
            <span
              className="navigation-link"
              onClick={() => onNavLinkClickHandler(componentId)}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
