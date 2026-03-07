import styles from "./TechStack.module.css";
import {
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";

const techIcons = [
    { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
    { icon: <SiExpress />, name: 'Express', color: '#ffffff' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
];

function TechStack() {
    return (
        <>
        </>
    )
}
export default TechStack;