import "./DifferSection.css";

const Differ = () => {
  const uniqueSellingPoints = [
    {
      title: "Single Page Applications",
      description:
        "I specialize in developing SPAs for a smooth user experience.",
    },
    {
      title: "Thorough Understanding of Your Needs",
      description:
        "I focus on understanding your challenges to offer tailored solutions.",
    },
    {
      title: "MERN Stack Expertise",
      description:
        "I leverage the MERN stack to build powerful and scalable applications.",
    },
    {
      title: "Focus on Performance and SEO",
      description: "I ensure that your website is fast and SEO-friendly.",
    },
    {
      title: "Responsive Design",
      description: "I create designs that work seamlessly on all devices.",
    },
    {
      title: "User-Centric Approach",
      description: "My development process focuses on user experience.",
    },
    {
      title: "Ongoing Support and Maintenance",
      description: "I provide continuous support post-launch.",
    },
    {
      title: "Collaboration and Communication",
      description: "I maintain clear communication throughout the project.",
    },
  ];

  return (
    <section className="differSection">
      <div className="text_container">
        <h1 className="section_header">
          How I Am Different and Why You Should Choose Me
        </h1>
        <ul className="points_list">
          {uniqueSellingPoints.map((point, index) => (
            <li key={index}>
              <strong>{point.title}:</strong>
              <br />
              <div className="point-description"> {point.description}</div>
            </li>
          ))}
        </ul>
        {/* <div className="cv_download">
        <a
          href="/path/to/your/cv.pdf"
          download
          className="button_large cv_button"
        >
          Download CV 
        </a>
      </div> */}
      </div>
      
    
    </section>
  );
};

export default Differ;
