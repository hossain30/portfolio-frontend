import "./Contact.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
const ContactForm = ({ setLoading }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, email, phone, message } = form;
    setLoading(true);
    let response = await fetch(
      "https://portfolio-backend-1-qpz1.onrender.com/contactUs",
      // "http://localhost:3000/contactUs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      }
    );
    setLoading(false);

    response = await response.json();

    if (response.status === 200) {
      toast.success("Form submitted", {
        style: { color: "white", backgroundColor: "black" },
      });

      setForm({ name: "", phone: "", email: "", message: "" });
    } else if (response.status === 500) {
      toast.error("Internal Server Error", {
        style: { color: "white", backgroundColor: "black" },
      });
    }
  };

  return (
    <>
      <div id="contact" className="contact_section">
        <div className="left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906312.png"
            alt="Envelope"
            className="envelope_img"
          />
        </div>

        <div className="right">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={form.name}
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="What's Your Email?"
              required
            />
            <input
              value={form.phone}
              onChange={handleChange}
              name="phone"
              type="tel"
              placeholder="Phone Number(optional)"
            />
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              placeholder="Your Questions..."
              rows="5"
            ></textarea>
            <button className="button_small submit_btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
