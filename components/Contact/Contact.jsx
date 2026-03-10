import styles from "./Contact.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import imageContact from "../../public/images/Image-contact.jpg";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContent}>
        <div>
          <h2 className={styles.contactTitle}>GET IN TOUCH</h2>
          <div className={styles.contactInfo}>
            <p className={styles.contact}>
              <FaEnvelope className={styles.infoIcon} />
              <a href="mailto:manau.tunjae@hotmail.com">
                manau.tunjae@hotmail.com
              </a>
            </p>
            <p className={styles.contact}>
              <FaPhoneAlt className={styles.infoIcon} />
              <span>070-792 88 03</span>
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.iconsTitle}>FOLLOW ME BY</h2>
          <div className={styles.iconsContent}>
            <a
              href="https://instagram.com/manautunjae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/manau-tunjae-7125b730a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.faLinkedIn} />
            </a>
            <a
              href="https://github.com/ManauTunjae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.faGithub} />
            </a>
            <a
              href="https://threads.net/@manautunjae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads className={styles.faThreads} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.imageContact}>
        <img
          src="/images/Image-contact.jpg"
          alt="Manau Tunjae"
          className={styles.contactImage}
        />
      </div>
    </section>
  );
};
export default Contact;
