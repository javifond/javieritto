import experience from "../../data/experience.json";
import { NAVIGATION_COMPONENT_ID } from "../Utils/App.constants";

import "./Experience.css";

interface IExperience {
  title: string;
  dates: string;
  company: string;
  description: string;
  stack: string[];
}

function Job({ title, dates, company, description, stack }: IExperience) {
  return (
    <div id={NAVIGATION_COMPONENT_ID.EXPERIENCE}>
      <div className="job-title-wrapper">
        <h3 className="job-title">{title}</h3>
        <h4>{company}</h4>
        <h4 className="dates">{dates}</h4>
      </div>
      <p className="description">{description}</p>
      <div className="pills">
        {stack.map((tech, i) => (
          <span className="pill" key={`tech-stack-${i}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const myExperience: IExperience[] = experience;

  return (
    <section>
      <h2 className="experience-title">My Experience</h2>
      {myExperience.map((job, i) => (
        <Job {...job} key={`my-job-${i}`} />
      ))}
    </section>
  );
}

export default Experience;
