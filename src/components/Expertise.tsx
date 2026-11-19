import React from "react";
import Chip from "@mui/material/Chip";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import "../assets/styles/Expertise.css";
const groups = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces and interactive user experiences.",
    icon: <CodeRoundedIcon />,
    skills: [
      "JavaScript (ES6)",
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & Databases",
    description:
      "Developing REST APIs, server-side functionality and data-driven applications.",
    icon: <StorageRoundedIcon />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Tools I use to build, test, collaborate on and deploy applications.",
    icon: <BuildRoundedIcon />,
    skills: ["Git", "GitHub", "NPM", "Postman", "Vercel", "Render", "Neon"],
  },
];
function Expertise() {
  return (
    <section className="skills-container section-shell" id="expertise">
      <div className="section-heading">
        <span>WHAT I WORK WITH</span>
        <h1>Skills & Technologies</h1>
        <p>A practical toolkit for building full-stack web applications.</p>
      </div>
      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="flex-chips">
              {group.skills.map((skill) => (
                <Chip key={skill} className="chip" label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Expertise;
