import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} id="footer">
      <div className={styles.footerIcons}>
        {/* Instagram Icon */}
        <a
          href="https://instagram.com/DITT-ANVÄNDARNAMN"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaInstagram style={{ color: "#db0000" }} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/DITT-ANVÄNDARNAMN"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin style={{ color: "#013b92" }} />
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/DITT-ANVÄNDARNAMN"
          target="_blank"
          rel="noopener noreferrer"
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
