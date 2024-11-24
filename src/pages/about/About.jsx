import Footer from "../../components/footer/Footer";
import "./About.css";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFastBackwardSolid } from "react-icons/lia";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import me2 from '../../assets/me/me2.jpg'

const About = () => {
  const points = [
    {
      title: "Technical Expertise",
      description:
        "I have a strong grip on the MERN stack (MongoDB, Express, React, Node.js), which allows me to develop scalable and dynamic web applications.",
    },
    {
      title: "Problem-Solving Approach",
      description:
        "I efficiently solve coding issues such as  JWT authentication, file uploads, and API integrations.",
    },
    {
      title: "Client-Centered Development",
      description:
        "My primary focus is understanding client requirements and delivering solutions tailored to their needs.",
    },
    {
      title: "Freelancing Ready",
      description:
        "I am fully ready for client projects, and my past experience has made me confident in delivering end-to-end web app development.",
    },
    {
      title: "Continuous Learner",
      description:
        "I stay up to date with new technologies and trends, allowing me to adopt modern web development practices.",
    },
    {
      title: "Time Management",
      description:
        "I focus on meeting deadlines and delivering projects on time, ensuring reliable service for clients.",
    },
    {
      title: "Attention to Detail",
      description:
        "I pay special attention to user experience and performance optimization, ensuring the website is fast, secure, and engaging.",
    },
  ];

  return (
    <>
      <nav className="about_nav">
        <Link to={"/"}>
          <LiaFastBackwardSolid className="backword_icon" />
        </Link>
      </nav>
      <div className="about_section">
        <section className="top">
          <div className="left">
            <h1>About me</h1>
            <h2>
              I'm a MERN Stack developer from <br />
              West Bengal,India
            </h2>
            <p>
              I am a skilled and detail-oriented web developer with a strong
              foundation in the MERN stack. With hands-on experience in building
              dynamic, full-stack applications, I specialize in developing
              secure, scalable solutions with a focus on smooth user
              experiences. From authentication systems to complex CRUD
              functionalities, I ensure high-quality and efficient code
              delivery. Currently transitioning into freelancing, I aim to
              leverage my expertise to help businesses create impactful web
              solutions. While continuously enhancing my skill set, I am
              committed to staying ahead of the curve in the ever-evolving web
              development landscape.
            </p>

            <p>
              <span className="education_span">My Education </span>
              Currently pursuing 3 years of Diploma in Computer Science and
              Technology from
              <a
                style={{ color: "blue" }}
                href="https://dumkalpolytechnic.com/"
              >
                Dumkal Polytechnic
              </a>
              , strengthening my technical foundation and problem-solving skills
              in software development.
            </p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/hossain33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/hossain30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569151310444"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>

              <a
                href="mailto:dev.samsujjoha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail size={25} />
              </a>
              {/* <a
                href="https://twitter.com/dev_samsujjoha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrTwitter size={25} />
              </a> */}
            </div>
          </div>
          <div className="right">
            <img
              src={me2}

              
  
              alt="my pic"
            />
          </div>
        </section>
        <section className="middle">
          <h1>Client-Focused Solutions</h1>
          {points.map((point, index) => {
            return (
              <p key={index} className="point-desc">
                <span>✔️{point.title}: </span>
                {point.description}
              </p>
            );
          })}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
