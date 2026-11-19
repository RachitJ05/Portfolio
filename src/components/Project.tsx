import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import "../assets/styles/Project.css";
const projects = [
  {
    number: "01",
    name: "CodeConnect",
    subtitle: "Real-Time Pair Programming & Interview Platform",
    description:
      "A collaborative coding platform with video conferencing, real-time messaging and a VSCode-powered editor. Includes code execution against dynamic test cases, secure private rooms and background tasks.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stream SDK",
      "Clerk",
      "Inngest",
      "TanStack Query",
    ],
    github: "https://github.com/RachitJ05/CodeConnect",
    live: "https://code-connect-theta-eight.vercel.app/",
    tone: "violet",
    featured: true,
  },
  {
    number: "02",
    name: "Lumina",
    subtitle: "AI-Powered Creative & Productivity Web Platform",
    description:
      "A full-stack platform bringing together AI-powered text-to-image generation, image editing, article writing and resume analysis, with secure authentication and cloud media handling.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI API",
      "Cloudinary",
      "Clerk",
    ],
    github: "https://github.com/RachitJ05/Lumina",
    live: "https://lumina-zeta-one.vercel.app/",
    tone: "blue",
  },
  {
    number: "03",
    name: "CatalogX",
    subtitle: "Peer-to-Peer Item Marketplace",
    description:
      "A full-stack marketplace for listing, discovering and managing items, backed by REST APIs, PostgreSQL and type-safe database access with Drizzle ORM.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
    ],
    github: "https://github.com/RachitJ05/CatalogX",
    live: "https://vault-seven-pearl.vercel.app/",
    tone: "orange",
  },
];
function Project() {
  return (
    <section className="projects-container section-shell" id="projects">
      <div className="section-heading">
        <span>SELECTED WORK</span>
        <h1>Projects I've Built</h1>
        <p>A few things I've designed and developed.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.number}
          >
            <div className={`project-art ${project.tone}`}>
              <span className="project-number">{project.number} / 03</span>
              <div className="project-art-title">
                {project.name}
                <span>_</span>
              </div>
              <div className="project-art-caption">FULL STACK DEVELOPMENT</div>
            </div>
            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <h2>{project.name}</h2>
                  <h3>{project.subtitle}</h3>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} GitHub`}
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                      title="Live demo"
                    >
                      <OpenInNewRoundedIcon />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Project;
