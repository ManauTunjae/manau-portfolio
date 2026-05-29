import styles from "./TechStack.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTrello,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiNotion,
  SiOpenai,
  SiGooglegemini,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiMongoose,
} from "react-icons/si";
import { DiVisualstudio, DiScrum } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb"; // Snygg JS-ikon
import { GitHubCalendar } from "react-github-calendar";

function TechStack() {
  const frontendTech = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <TbBrandJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  ];

  const backendTech = [
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express", color: "#000000" },
    { icon: <SiMongoose />, name: "Mongoose", color: "#880000" },
  ];

  const databaseTech = [
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  ];

  const toolsTech = [
    { icon: <SiOpenai />, name: "ChatGPT", color: "#10a37f" },
    { icon: <SiGooglegemini />, name: "Gemini", color: "#4285F4" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <DiVisualstudio />, name: "VS Code", color: "#007ACC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiNotion />, name: "Notion", color: "#000000" },
    { icon: <FaTrello />, name: "Trello", color: "#0079BF" },
    { icon: <DiScrum />, name: "Scrum / Agilt", color: "#62A03F" },
  ];

  return (
    <section className={styles.techContainer} id="stack">
      {/* --- GITHUB ACTIVITY --- */}
      <div className={styles.githubSection}>
        <h3 className={styles.sectionTitle}>GitHub Activity & Tech jag använder</h3>
        <div className={styles.githubPlaceholder}>
          <GitHubCalendar username="ManauTunjae" colorScheme="light" />
        </div>
      </div>

      {/* --- TECH GRID (Inspiration från bilden) --- */}
      <div className={styles.matrixContainer}>
        {/* Front-End Rad */}
        <div className={styles.matrixRow}>
          <h4 className={styles.matrixHeader}>Front-End</h4>
          <div className={styles.matrixGrid}>
            {frontendTech.map((tech, i) => (
              <div
                key={i}
                className={styles.techCard}
                style={{ "--hover-color": tech.color }}
              >
                <div className={styles.iconBox}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Rad */}
        <div className={styles.matrixRow}>
          <h4 className={styles.matrixHeader}>Back-End</h4>
          <div className={styles.matrixGrid}>
            {backendTech.map((tech, i) => (
              <div
                key={i}
                className={styles.techCard}
                style={{ "--hover-color": tech.color }}
              >
                <div className={styles.iconBox}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Database Rad */}
        <div className={styles.matrixRow}>
          <h4 className={styles.matrixHeader}>Database</h4>
          <div className={styles.matrixGrid}>
            {databaseTech.map((tech, i) => (
              <div
                key={i}
                className={styles.techCard}
                style={{ "--hover-color": tech.color }}
              >
                <div className={styles.iconBox}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Rad */}
        <div className={styles.matrixRow}>
          <h4 className={styles.matrixHeader}>Tools & AI</h4>
          <div className={styles.matrixGrid}>
            {toolsTech.map((tech, i) => (
              <div
                key={i}
                className={styles.techCard}
                style={{ "--hover-color": tech.color }}
              >
                <div className={styles.iconBox}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
