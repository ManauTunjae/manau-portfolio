import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoChevronUp } from "react-icons/io5";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Visas efter 200px scroll
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`${styles.scrollWrapper} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <Link
        to="intro"
        smooth={true}
        duration={800}
        className={styles.scrollLink}
      >
        <div className={styles.iconContainer}>
          <IoChevronUp className={styles.arrowIcon} />
          <span className={styles.pulseRing}></span>
        </div>
      </Link>
    </div>
  );
};

export default ScrollToTop;
