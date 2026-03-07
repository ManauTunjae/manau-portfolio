import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
    <footer className={styles.footerContainer}>
        <p className={styles.footerText}>© {currentYear} Manau Tunjae. All rights reserved.</p>
    </footer>
    )
}
export default Footer;