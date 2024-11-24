import "./Home.css";
import { useState } from "react";

//////COMPONENTS

import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import Skills2 from "../../components/skills2/Skills2";
import Projects from "../../components/projects/Projects";
import ServiceSection from "../../components/services/Service";
import ClientRequirementsSection from "../../components/clientRequirments/ClientRequirments";
import DifferSection from "../../components/differSection/DifferSection";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contact/Contact";
import Navbar from "../../components/nav/Nav";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
     
        {loading && (
          <div className="spinner_container overlay">
            <ClipLoader color={"#36D7B7"} size={50} />
          </div>
        )}


      <Navbar />
      <div className="home_section">
        <Hero />
        <Skills />
        <Skills2 />
        <Projects />
        {/* <ServiceSection /> */}
        <ClientRequirementsSection />
        <DifferSection />
        <ContactForm setLoading={setLoading} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
