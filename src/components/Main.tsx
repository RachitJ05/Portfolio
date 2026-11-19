import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from '@mui/icons-material/Code';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "../assets/styles/Main.css";
const links = [
  {
    label: "GitHub",
    href: "https://github.com/RachitJ05",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rachitjain95/",
    icon: <LinkedInIcon />,
  },
  {
    label: "Codolio",
    href: "https://codolio.com/profile/RJ95",
    icon: <CodeIcon />,
  },
  {
    label: "Email",
    href: "mailto:rachitjain690@gmail.com",
    icon: <EmailOutlinedIcon />,
  },
];
function Main() {
  return (
    <section className="container hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </span>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>
            Rachit Jain<span>.</span>
          </h1>
          <h2>Software Developer</h2>
          <p className="hero-description">
            I build practical, user-focused web applications with modern web technologies. I enjoy turning ideas into reliable
            products, from intuitive interfaces to backend APIs.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a
              className="secondary-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume ↓
            </a>
          </div>
          <div className="social_icons">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="initials-card">
            <span>RJ</span>
            <small>BUILD · LEARN · SHIP</small>
          </div>
          <div className="floating-tag tag-react">React.js</div>
          <div className="floating-tag tag-node">Node.js</div>
          <div className="floating-tag tag-db">PostgreSQL</div>
        </div>
      </div>
    </section>
  );
}
export default Main;
