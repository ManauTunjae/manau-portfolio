import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
    <nav className={styles.navWrapper}>
        <p className={styles.navBarName}>Manau Tunjae portfolio</p>
        <div className={`styles.navBarContainer ${isOpen ? styles.navBarContainer : ''}`}>
            <Link to='intro' smooth={true} duration={500} className={styles.navButton}>INTRO</Link>
            <Link to='about' smooth={true} duration={500} className={styles.navButton}>GET TO KNOW ME</Link>
            <Link to='stack' smooth={true} duration={500} className={styles.navButton}>STACK</Link>
            <Link to='projects' smooth={true} duration={500} className={styles.navButton}>MY PROJECTS</Link>
            <Link to='contact' smooth={true} duration={500} className={styles.navButton}>GET IN TOUCH</Link>
        </div>
        <IoMenu className={styles.menuIcon } size={30}  onClick={toggleMenu}/>
        
    </nav>
    )
}
export default Navbar;