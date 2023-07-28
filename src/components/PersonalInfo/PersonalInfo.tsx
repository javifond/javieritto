import info from "../../data/personal-info.json";

import "./PersonalInfo.css";

interface IInfo {
  name: string;
  role: string;
  company: string;
  description: string;
}
function PersonalInfo() {
  const { name, role, company, description }: IInfo = info;
  return (
    <>
      <h1>{name}</h1>
      {role && company && <h3 className="personal-role">{`${role} @${company}`}</h3>}
      <p className="motto">{description}</p>
    </>
  );
}

export default PersonalInfo;
