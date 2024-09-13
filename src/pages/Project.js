import React from "react";
// import Footer from "../component/Footer/Footer";
import { projectData } from "../data";
import "./project.css";
function Project() {
  const handleLiveProject = (link) => {
    window.open(link);
  };
  const handleSourceCode = (link) => {
    window.open(link);
  };
  return (
    <div className="header-ht-margin">
      <section className="content-min-height project">
        <header>
          <h2 className="project-header">See my Projects</h2>
        </header>
        {projectData.map((project, index) => {
          const { id, title, description, date, liveLink, sourceLink } =
            project;
          return (
            <article key={id} className="project-item">
              <h3 className="project-item__title">{title}</h3>
              <p className="project-item__date">{date}</p>
              {index === 0 ? (
                project.description.split(".").map((line, i) => (
                  <p key={i} className="project-item__description">
                    {line.trim()}.
                  </p>
                ))
              ) : (
                <p className="project-item__description">{description}</p>
              )}
              <div className="project-item__actions">
                <button
                  className="project-item__actions--live"
                  onClick={() => handleLiveProject(liveLink)}
                >
                  Live Project
                </button>
                <button
                  className="project-item__actions--source"
                  onClick={() => handleSourceCode(sourceLink)}
                >
                  Source Code
                </button>
              </div>
            </article>
          );
        })}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Project;
