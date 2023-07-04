import experience from "../../data/experience.json";

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
    <div>
      <h2 className="title">{title}</h2>
      <h4>{company}</h4>
      <h4 className="dates">{dates}</h4>
      <p className="description">{description}</p>
      {stack.map((tech, i) => (
        <span className="pill" key={`tech-stack-${i}`}>
          {tech}
        </span>
      ))}
    </div>
  );
}

function Experience() {
  const myExperience: IExperience[] = experience;

  return (
    <section>
      {myExperience.map((job, i) => (
        <Job {...job} key={`my-job-${i}`} />
      ))}
    </section>
  );
}

export default Experience;
