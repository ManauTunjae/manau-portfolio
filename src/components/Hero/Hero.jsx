import styles from "./Hero.module.css";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className={styles.heroContainer} id="hero">
      {/* Din snygga Canva-bild som en fullskärms-omslagsbild */}
      <div className={styles.coverWrapper}>
        <img
          src="/images/background.png"
          alt="Manau Tunjae Portfolio Cover"
          className={styles.coverImage}
        />

        {/* En subtil, snygg glasknapp som ligger centrerad längst ner på bilden 
            och scrollar ner användaren till nästa sektion ("Get to know me") */}
        <Link
          to="intro"
          smooth={true}
          duration={500}
          className={styles.scrollDownBtn}
        >
          EXPLORE PORTFOLIO ↓
        </Link>
      </div>
    </section>
  );
}

export default Hero;
