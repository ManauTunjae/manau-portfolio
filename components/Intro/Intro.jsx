import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6'; 
import styles from "./Intro.module.css";

function Intro() {
  return (
      <section className={styles.intro}>
        <div className={styles.textContent}>
          <h1 className={styles.headerName}>MANAU TUNJAE</h1>
          <h2 className={styles.statusName}>Fullstack Web Developer</h2>
          <p className={styles.introPara}>
            Hi there, I'm a Fullstack Web Developer student at Nackademin in
            Stockholm with a passion for turning complex problems into elegant
            digital solutions.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.iconsContent}>
          <a href="https://instagram.com/manautunjae" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.faInstagram} />
          </a>
          <a href="https://linkedin.com/in/manau-tunjae-7125b730a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.faLinkedIn} />
          </a>
          <a href="https://github.com/ManauTunjae" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.faGithub} />
          </a>
          <a href="https://threads.net/@manautunjae" target="_blank" rel="noopener noreferrer">
            <FaThreads className={styles.faThreads} />
          </a>
        </div>
      </section>
  );
}
export default Intro;
