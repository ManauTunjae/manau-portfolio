import styles from "./Intro.module.css";

function Intro() {
  return (
    <>
      <section className={styles.intro}>
        <h1 className={styles.headerName}>MANAU TUNJAE</h1>
        <h2 className={styles.statusName}>Fullstack Web Developer</h2>
        <p className={styles.introPara}>
          Hi there, I'm a Fullstack Web Developer student at Nackademin in
          Stockholm with a passion for turning complex problems into elegant
          digital solutions.
        </p>
        <button className={styles.readMoreBtn}>READ MORE</button>
      </section>
    </>
  );
}
export default Intro;
