import styles from "./About.module.css";
import manauPhoto from "../../src/assets/manau-photo.jpeg";
import { Link } from "react-scroll";

function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.imageContent}>
        <img
          src={manauPhoto}
          alt="Manau Tunjae"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.textContent}>
        <h2 className={styles.title}>GET TO KNOW ME</h2>
        <p className={styles.description}>
          My journey into tech is driven by a mix of logical thinking and a deep
          curiosity for how things work under the hood. Whether I'm crafting
          responsive front-end interfaces or architecting robust back-end logic,
          I love the 'YESS!' moment when the code finally clicks.
        </p>
        <p className={styles.description}>
          As a developer, I value continuous learning and collaboration. I don’t
          just want to write code—I want to build meaningful experiences that
          make an impact. When I’m not debugging or exploring new frameworks,
          you’ll likely find me logging miles on a treadmill or savoring a
          coffee at a café in Stockholm.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          className={styles.myProjectsBtn}
        >
          MY PROJECTS
        </Link>
      </div>
    </section>
  );
}

export default About;
