import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
    <nav className={styles.navWrapper}>
        <p className={styles.navBarName}>Manau Tunjae portfolio</p>
        <div className={styles.navBarContainer}>
            <Link to='intro' smooth={true} duration={500} className={styles.navButton}>INTRO</Link>
            <Link to='about' smooth={true} duration={500} className={styles.navButton}>GET TO KNOW ME</Link>
            <Link to='stack' smooth={true} duration={500} className={styles.navButton}>STACK</Link>
            <Link to='projects' smooth={true} duration={500} className={styles.navButton}>MY PROJECTS</Link>
            <Link to='contact' smooth={true} duration={500} className={styles.navButton}>GET IN TOUCH</Link>
        </div>
    </nav>
    )
}
export default Navbar;