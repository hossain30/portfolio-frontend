import { useState } from "react";
import "./Nav.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className={`nav_links ${menuVisible ? "" : "menuHidden "}`}>
        <div className="times">
          <FaTimes onClick={() => setMenuVisible(false)} />
        </div>
        <Link onClick={() => setMenuVisible(false)} to="/about">
          About
        </Link>
        {/* <ScrollLink smooth={true} duration={500} onClick={() => setMenuVisible(false)}   offset={-100}  to="service">
          Services
        </ScrollLink> */}
        <ScrollLink
          smooth={true}
          duration={500}
          onClick={() => setMenuVisible(false)}
          offset={-100}
          to="portfolio"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          smooth={true}
          duration={500}
          onClick={() => setMenuVisible(false)}
          offset={-100}
          to="contact"
        >
          Contact Me
        </ScrollLink>
      </div>

      <div className="bars">
        {menuVisible === false && (
          <FaBars onClick={() => setMenuVisible(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
