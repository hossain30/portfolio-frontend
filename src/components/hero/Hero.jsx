import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Hero.css";
import React, { useEffect } from "react";
import Typed from "typed.js";
import me from '../../assets/me/me1.jpg'
const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Hey,nice to meet you!😊",
        "Welcome to my website!",
        "Enjoy your stay!",
        "Feel free to explore!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    };

    let typed = new Typed(".typed", options);

    return () => typed.destroy();
  }, []);
  return (
    <div className="hero_section">
      <div className="left">
        <h5 className="typed"></h5>
        <pre>
          I'm Samsujjoha Hossain
          <br />- a<span> Web developer</span>,
          <br />
          Work globally!
        </pre>
        <p>
          With over 2 years of hands-on experience in web development, I
          specialize in building responsive, dynamic websites that not only look
          great but are also optimized for SEO. I help businesses grow online
          with modern, responsive websites designed to meet their unique needs.
          My focus is on crafting Single Page Applications (SPA) using React.js,
          ensuring smooth, fast user interactions. From creating intuitive UI/UX
          designs to managing state with tools like Redux and React Router, I
          aim to deliver solutions that are functional, scalable, and
          maintainable. I'm passionate about collaborating on global projects
          and always strive to create solutions that support business growth and
          align with your goals.
        </p>
        <div>
          <Link to={"/about"} className="explore_button">
            Explore More <FaArrowCircleRight />
          </Link>
        </div>
      </div>
      <div className="right">
        <img
        //my photo
          src={me}
          alt="my-pic"
        />
      </div>
    </div>
  );
};

export default Hero;
