import React from "react";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import "../assets/styles/Timeline.css";
function Timeline() {
  return (
    <section id="history" className="section-shell history-section">
      <div className="section-heading">
        <span>MY JOURNEY</span>
        <h1>Experience & Education</h1>
        <p>Where I've been learning, building and contributing.</p>
      </div>
      <div className="journey-list">
        <article className="journey-item">
          <div className="journey-icon">
            <WorkOutlineRoundedIcon />
          </div>
          <div className="journey-content">
            <div className="journey-meta">
              <span>JUNE 2026 — SEPTEMBER 2026</span>
              <span className="journey-type">INTERNSHIP</span>
            </div>
            <h3>Engineering Intern – Airtel Precise Positioning</h3>
            <h4>Airtel Digital Limited (Xtelify Limited)</h4>
            <ul>
              <li>
                Developed a real-time GNSS accuracy visualization platform using
                React.js and Leaflet, with live positioning, camera access and
                interactive map views.
              </li>
              <li>
                Built Node.js and Express.js services with Socket.IO for
                real-time GNSS data transmission; added recording, trajectory
                generation and Excel export.
              </li>
              <li>
                Integrated RTK correction workflows and explored DR and
                phone-based PDR for GNSS-denied periods.
              </li>
            </ul>
          </div>
        </article>
        <article className="journey-item">
          <div className="journey-icon">
            <SchoolRoundedIcon />
          </div>
          <div className="journey-content">
            <div className="journey-meta">
              <span>2023 — PRESENT</span>
              <span className="journey-type">EDUCATION</span>
            </div>
            <h3>B.Tech – Computer Science & Engineering</h3>
            <h4>Bennett University</h4>
            <p>CGPA: 8.8</p>
            <p>Class XII (CBSE): 94.4% · Class X (CBSE): 94%</p>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Timeline;
