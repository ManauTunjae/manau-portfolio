import styles from "./About.module.css";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-scroll";

function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.imageAbout}>
        <video
          width="80%"
          height="auto"
          controls
          playsInline
          muted
          autoPlay
          loop
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.textContent}>
        <h2 className={styles.title}>Manau! Vem är du?</h2>
        <p className={styles.description}>
          Min resa inom tech drivs av en kombination av logiskt tänkande och en
          stor nyfikenhet på hur saker fungerar under huven. Oavsett om jag
          skapar responsiva gränssnitt i frontend eller arkitekterar robust
          logik i backend, älskar jag den där 'JA!'-känslan när koden äntligen
          klickar. Som utvecklare värdesätter jag kontinuerligt lärande och
          lagarbete. Jag vill inte bara skriva kod – jag vill bygga meningsfulla
          upplevelser som gör skillnad på riktigt.
          <br />
          <br />
          När jag inte sitter framför skärmen och djupdyker i nya ramverk hittar
          du mig oftast i löparspåret eller på löpbandet. Just nu har jag siktet
          helt inställt på mitt nästa stora mål: att klara ett 10k-lopp! Att
          utmana mig själv i löpningen ger mig exakt samma kick som att knäcka
          en svår bugg. Efter ett tufft träningspass eller en intensiv
          kodningssession tar jag gärna en välförtjänt kaffe på något mysigt
          café här i Stockholm eller i Katrineholm.
        </p>
        <div className={styles.buttonContainer}>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className={styles.myProjectsBtn}
          >
            PROJEKT
          </Link>
          <a
            href="/CV-Manau_Tunjae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.myProjectsBtn} // Samma klass = samma utseende! 🎨
          >
            <FaFilePdf style={{ marginRight: "0.5rem" }} />
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
