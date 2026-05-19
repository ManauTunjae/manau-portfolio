import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} id="footer">
      <div className={styles.footerIcons}>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/manautunjae/"
          target="_blank"
          rel="Manau Instagram"
          className={styles.iconLink}
        >
          <FaInstagram style={{ color: "#db0000" }} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/manau-tunjae-7125b730a/"
          target="_blank"
          rel="Manau LinkedIn"
          className={styles.iconLink}
        >
          <FaLinkedin style={{ color: "#013b92" }} />
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/ManauTunjae"
          target="_blank"
          rel="Manau GitHub"
          className={styles.iconLink}
        >
          <FaGithub style={{ color: "#6f34cf" }} />
        </a>
      </div>
      <p className={styles.footerText}>
        © {currentYear} Manau Tunjae. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
