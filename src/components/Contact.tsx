import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import "../assets/styles/Contact.css";
function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-panel">
        <span>HAVE A PROJECT OR OPPORTUNITY?</span>
        <h1>
          Let's build something
          <br />
          <em>meaningful.</em>
        </h1>
        <p>
          I'm open to conversations about software development, internships and
          interesting projects.
        </p>
        <a className="primary-button" href="mailto:rachitjain690@gmail.com">
          <EmailOutlinedIcon /> rachitjain690@gmail.com{" "}
          <ArrowOutwardRoundedIcon />
        </a>
      </div>
    </section>
  );
}
export default Contact;
