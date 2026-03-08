import styles from "./Projects.module.css";
import { myProjects } from "./projectData";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiVite,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJson,
} from "react-icons/si";

const tagIcons = {
  HTML5: <FaHtml5 style={{ color: "#E34F26" }} />,
  CSS3: <FaCss3Alt style={{ color: "#1572B6" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  "Node.js": <FaNodeJs style={{ color: "#339933" }} />,
  Express: <SiExpress style={{ color: "#ffffff" }} />,
  MongoDB: <SiMongodb style={{ color: "#47A248" }} />,
  Postman: <SiPostman style={{ color: "#FF6C37" }} />,
  JSON: <SiJson style={{ color: "#ffffff" }} />,
  React: <FaReact style={{ color: "#61DAFB" }} />,
  Vite: <SiVite style={{ color: "#646CFF" }} />,
};

function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>
        <span className={styles.syntaxParen}>(</span>
        <span className={styles.syntaxParam}> My School Projects </span>
        <span className={styles.syntaxParen}>)</span>
        <span className={styles.syntaxArrow}> =&gt; </span>
        <span className={styles.syntaxBracket}>&#123;</span>
      </h2>

      <div className={styles.grid}>
        {myProjects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.cardGlow}></div>{" "}
            {/* För den snygga effekten */}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tagIcon}>
                  {tagIcons[tag] || tag}{" "}
                  {/* Visar ikonen om den finns, annars texten */}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Link to project
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>
        <span className={styles.syntaxBracket}>&#125;</span>
      </h2>
    </section>
  );
}
export default Projects;
