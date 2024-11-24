import "./Footer.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social_icons">
        <a
          href="https://www.linkedin.com/in/hossain33"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/hossain30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61569151310444"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>

        <a
          href="mailto:dev.samsujjoha@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail className="icon" />
        </a>
        {/* <a
          href="https://twitter.com/dev_samsujjoha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrTwitter className="icon" />
        </a> */}
      </div>

      {/* <p>Copyright &copy; 2024; Designed by Samsujjoha Hossain</p> */}
      <p>
        Copyright &copy; 2024; Designed by Samsujjoha Hossain
        <br />
        For inquiries:
        <a
          href="mailto:dev.samsujjoha@gmail.com"
          style={{
            color: "#FF6E01",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          dev.samsujjoha@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
