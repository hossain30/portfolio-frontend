import "./ClientRequirments.css";
import check from "./check.png";
const ClientRequirementsSection = () => {
  const steps = [
    {
      title: "Step 1: Understanding Your Business",
      description:
        "This is the phase where I dive deep into your business and get to know you.",
    },
    {
      title: "Step 2: Developing a Strategy",
      description:
        "In this step, I will come up with a website style and content strategy.",
    },
    {
      title: "Step 3: Prototyping and Feedback",
      description:
        "I will create interactive prototypes of the design, allowing for feedback and adjustments before moving to development, ensuring alignment with your vision.",
    },
    {
      title: "Step 4: Development and Launch",
      description:
        "Once the design is approved, I will develop the website ensuring it is fast, secure and organic.",
    },
  ];

  return (
    <section className="client_requirements_section">
      <h1 className="section_header">
        How I Understand Client Requirements (4 Steps)
      </h1>
      <hr className="horizontal_line" />
      <div className="steps_container">
        {steps.slice(0, 2).map((step, index) => (
          <div className="step_item" key={index}>
            <h2 className="step_title">
              <span className="check">
                <img src={check} alt="" />
              </span>

              {step.title}
            </h2>
            <p className="step_description">{step.description}</p>
          </div>
        ))}
      </div>
      <hr className="horizontal_line" />
      <div className="steps_container">
        {steps.slice(2).map((step, index) => (
          <div className="step_item" key={index + 2}>
            <h2 className="step_title">
            <span className="check">
                <img src={check} alt="" />
              </span>

            {step.title}</h2>
            <p className="step_description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientRequirementsSection;
