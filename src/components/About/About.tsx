import { NAVIGATION_COMPONENT_ID } from "../Utils/App.constants";

import "./About.css";

function About() {
  return (
    <section id={NAVIGATION_COMPONENT_ID.ABOUT} className="about">
      <h2 className="about-title">About me</h2>

      <p>
        I am an accomplished Software Engineering Manager with <b>12+ years</b>{" "}
        of experience in <b>Frontend development</b>. Throughout my career, I
        have successfully delivered numerous projects, showcasing my expertise
        and ability to drive results.
      </p>

      <p>
        As a <b>team leader and engineering manager for over 2+ years</b>, I am
        deeply committed to the success of my teams. I foster a collaborative
        environment, leveraging agile methodologies and techniques to ensure
        optimal project outcomes and maintain strong relationships with clients
        and senior stakeholders.
      </p>

      <p>
        <b>Leading by example</b>, I prioritize high-quality output and strive
        for excellence in every endeavor. My commitment,{" "}
        <b>team player mentality</b>, and positive attitude have earned me
        promotions and continuous career progression, reflecting my dedication
        to achieving outstanding results.
      </p>
    </section>
  );
}

export default About;
