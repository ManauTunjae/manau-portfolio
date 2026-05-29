import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-scroll";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro} id="intro">
      <div className={styles.textContent}>
        <h1 className={styles.headerName}>MANAU TUNJAE</h1>
        <h2 className={styles.statusName}>Fullstack Webbutvecklare</h2>
        <p className={styles.introPara}>
          Hej! Jag heter Manau och jag är en blivande Fullstack Webbutvecklare.
          Nu studerar jag på Nackademin Yrkeshögskolan i Stockholm. Med passion
          att förvandla komplexa problem till eleganta digitala lösningar. 
        </p>
        <p className={styles.introPara}>
          Just
          nu förbereder jag mig för min LIA-period (praktik) till hösten/vintern
          2026, där jag ser fram emot att bidra med mina kunskaper inom modern
          webbteknik och samtidigt fortsätta utvecklas tillsammans med erfarna
          utvecklare.
        </p>
        <div className={styles.introPara}>
          <Link
            to="about"
            smooth={true}
            duration={800}
            className={styles.readMoreBtn}
          >
            READ MORE
          </Link>
        </div>
      </div>
      <div className={styles.imageContent}>
        <img
          src="/images/image-intro.svg"
          alt="intro-imgae"
          className={styles.introImage}
        />
      </div>
    </section>
  );
}
export default Intro;
