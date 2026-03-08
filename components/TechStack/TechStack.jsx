import styles from "./TechStack.module.css";
// Vi hämtar CSS och HTML från 'fa' (Font Awesome) för de är säkrare
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'; 
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiPostman, 
  SiPostgresql 
} from 'react-icons/si';

const techIcons = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" }, // Här är fixen!
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#ffffff" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
];

function TechStack() {
  return (
    <section className={styles.techContainer}>
      <h2 className={styles.codeTitle}>
        <span className={styles.syntaxParen}>(</span>
        <span className={styles.syntaxParam}> Tech </span>
        <span className={styles.syntaxParen}>)</span>
        <span className={styles.syntaxArrow}> =&gt; </span>
        <span className={styles.syntaxBracket}>&#123;</span>
        <span className={styles.syntaxString}> `I'm learning && using` </span>
        <span className={styles.syntaxBracket}>&#125;</span>
      </h2>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Här duplicerar vi listan för oändlig skroll */}
          {[...techIcons, ...techIcons].map((tech, index) => (
            <div key={index} className={styles.slide}>
              <div style={{ color: tech.color }} className={styles.iconWrapper}>
                {tech.icon}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;