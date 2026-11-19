import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "../assets/styles/Footer.css";
function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Rachit Jain</span>
      <span>Designed & built with 💜.</span>
      <div>
        <a
          href="https://github.com/RachitJ05"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rachitjain95/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a href="mailto:rachitjain690@gmail.com" aria-label="Email">
          <EmailOutlinedIcon />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
