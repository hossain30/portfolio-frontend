import React, { useEffect } from "react";
import "./Projects.css";
import "aos/dist/aos.css"; // Import AOS CSS
import aos from "aos";
///photos
import worksPro from "../../assets/projectsPhotos/workspro.jpg";
const Projects = () => {
  useEffect(() => {
    aos.init({ duration: 1500, offset: 150 });
  }, []);

  const projects = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/150",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/150",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/150",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      imgSrc: worksPro,
      link: "https://workspro.netlify.app",
      description: " business solutions platform(WorksPro)",
    },
  ];

  return (
    <div id="portfolio" className="projects_section">
      <h1>Projects Gallery</h1>
      <div className="project_container">
        {projects.map((project, index) => (
          <a
            target="_blank"
            data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
            // data-aos= "flip-right"
            href={project.link}
            key={project.id}
            className="project_box"
          >
            <img src={project.imgSrc} alt={`Project ${project.id}`} />
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
