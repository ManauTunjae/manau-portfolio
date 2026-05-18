import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5"; // Lade till stäng-ikon
import { useState } from "react";

function Navbar() {
  // Menyn ska vara stängd från början på mobilen
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Stäng menyn när man klickar på en länk
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className={styles.navWrapper}>
        {/* Vi växlar mellan klasserna baserat på isOpen */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={styles.scrollDownBtn}
        >
          <img
            src="/images/logo.svg"
            alt="logo-imgae"
            className={styles.logoImage}
          />
        </Link>
        <div
          className={`${styles.navBarContainer} ${isOpen ? styles.active : ""}`}
        >
          <Link
            to="intro"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={closeMenu}
          >
            INTRO
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={closeMenu}
          >
            GET TO KNOW ME
          </Link>
          <Link
            to="stack"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={closeMenu}
          >
            STACK
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={closeMenu}
          >
            MY PROJECTS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={closeMenu}
          >
            GET IN TOUCH
          </Link>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
