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
      <h2 className="personal-role">{`${role} @${company}`}</h2>
      <p>{description}</p>
    </>
  );
}

export default PersonalInfo;
