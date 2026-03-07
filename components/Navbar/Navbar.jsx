import styles from './Navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.navWrapper}>
        <p className={styles.navBarName}>Manau Tunjae portfolio</p>
        <div className={styles.navBarContainer}>
            <button>GET TO KNOW ME</button>
            <button>MY PROJECTS</button>
            <button>GET IN TOUCH</button>
        </div>
    </nav>
    )
}
export default Navbar;