import styles from "./TechStack.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiCanva,
  SiNotion,
  SiOpenai,
  SiGooglegemini,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio, DiScrum } from "react-icons/di";

const languages = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#ffffff" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiMysql />, name: "MySQL", color: "#099fc1" },
];

const tools = [
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiOpenai />, name: "ChatGPT", color: "#10a37f" },
  { icon: <SiGooglegemini />, name: "Gemini", color: "#4285F4" },
  { icon: <SiNotion />, name: "Notion", color: "#ffffff" },
  { icon: <DiScrum />, name: "Scrum", color: "#62A03F" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <DiVisualstudio />, name: "VS Code", color: "#007ACC" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <SiCanva />, name: "Canva", color: "#00C4CC" },
];

function TechStack() {
  return (
    <section className={styles.techContainer} id="stack">
      <div>
        <h2 className={styles.codeTitle}>
          <span className={styles.syntaxParen}>(</span>
          <span className={styles.syntaxParam}> Tech </span>
          <span className={styles.syntaxParen}>)</span>
          <span className={styles.syntaxArrow}> =&gt; </span>
          <span className={styles.syntaxBracket}>&#123;</span>
          <span className={styles.syntaxString}> `I'm learning && using` </span>
          <span className={styles.syntaxBracket}>&#125;</span>
        </h2>

        {/* Rad 1: Språk (Åker åt vänster) */}
        <div className={styles.staticTechGrid}>
          {languages.map((tech, index) => (
            <div key={index} className={styles.staticSlide}>
              <div style={{ color: tech.color }} className={styles.iconWrapper}>
                {tech.icon}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
      <h2 className={styles.codeTitle}>
        <span className={styles.syntaxParen}>(</span>
        <span className={styles.syntaxParam}> Tools </span>
        <span className={styles.syntaxParen}>)</span>
        <span className={styles.syntaxArrow}> =&gt; </span>
        <span className={styles.syntaxBracket}>&#123;</span>
        <span className={styles.syntaxString}> `I'm learning && using` </span>
        <span className={styles.syntaxBracket}>&#125;</span>
      </h2>
        {/* Rad 2: Verktyg (Åker åt höger) */}
        <div className={styles.slider}>
          <div className={styles.slideTrackRight}>
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className={styles.slide}>
                <div
                  style={{ color: tool.color }}
                  className={styles.iconWrapper}
                >
                  {tool.icon}
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
