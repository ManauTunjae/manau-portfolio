import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-scroll";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro} id="intro">
      <div className={styles.textContent}>
        <h1 className={styles.headerName}>MANAU TUNJAE</h1>
        <h2 className={styles.statusName}>Fullstack Web Developer</h2>
        <p className={styles.introPara}>
          Hi there, I'm a Fullstack Web Developer student at Nackademin in
          Stockholm with a passion for turning complex problems into elegant
          digital solutions.
        </p>
        <Link
          to="about"
          smooth={true}
          duration={800}
          className={styles.readMoreBtn}
        >
          READ MORE
        </Link>
      </div>
      <div className={styles.imageContent}>
        <img
          src="/images/Image-intro.jpg"
          alt="intro-imgae"
          className={styles.introImage}
        />
      </div>
    </section>
  );
}
export default Intro;
