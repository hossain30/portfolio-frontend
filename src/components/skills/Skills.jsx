import "./Skills.jsx";
import React from "react";
import "./Skills.css";
const frontendSkills = [
  { name: "React", percentage: "80%" },
  { name: "HTML 5", percentage: "95%" },
  { name: "CSS 3", percentage: "80%" },
  { name: "JavaScript", percentage: "75%" },
  { name: "Bootstrap 5", percentage: "75%" },
  { name: "Tailwind 3", percentage: "75%" },
  { name: "Redux", percentage: "80%" },
];

const backendSkills = [
  { name: "Node.js", percentage: "75%" },
  { name: "Express", percentage: "80%" },
  { name: "MongoDB", percentage: "75%" },
  { name: "JWT", percentage: "80%" },
];

const Skills = () => {
  return (
    <section className="skills_section">
      <h2>My Skillset</h2>
      <p>
        I have hands-on experience in modern technologies like React, Node.js,
        <br />
        and MongoDB, enabling me to deliver efficient and scalable web solutions
      </p>

      <div className="skills_container">
        <div className="frontend_skills">
          <h3>Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div className="skill_bar">
                <div
                  className="skill_level"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
              <span>{skill.percentage}</span>
            </div>
          ))}
        </div>

        <div className="backend_skills">
          <h3>Backend</h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div className="skill_bar">
                <div
                  className="skill_level"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
              <span>{skill.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
