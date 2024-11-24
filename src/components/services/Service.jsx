import "./Service.css";
import {
  AiOutlineShop,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineBank,
} from "react-icons/ai";
import { GiTeacher, GiMeal, GiHeartWings } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Service = () => {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  const services = [
    {
      icon: <AiOutlineShop />,
      title: "E-commerce Website",
      description: "Build online stores with secure payment options.",
    },
    {
      icon: <GiMeal />,
      title: "Restaurant Website",
      description: "Showcase your menu, location, and online bookings.",
    },
    {
      icon: <AiOutlineHome />,
      title: "Real Estate Website",
      description: "Property listings with search and virtual tours.",
    },
    {
      icon: <GiTeacher />,
      title: "Coaching Website",
      description: "Online course platforms with booking systems.",
    },
    {
      icon: <AiOutlineAppstore />,
      title: "Portfolio Website",
      description: "Showcase your work and past projects.",
    },
    {
      icon: <AiOutlineBank />,
      title: "Corporate Website",
      description: "Professional websites for businesses.",
    },
    {
      icon: <FaNewspaper />,
      title: "Blog Website",
      description: "Content-rich platforms for blogs or news.",
    },
    {
      icon: <GiHeartWings />,
      title: "Non-Profit Website",
      description: "Raise awareness and support with donation options.",
    },
  ];

  return (
    <section id="service" className="service_section">
      <h2 className="service_header">Service I Provide</h2>
      <div className="service_grid">
        {services.map((service, index) => (
          <div data-aos="fade-up"   data-aos-once="true"  key={index} className="service_box">
            <div className="service_icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
