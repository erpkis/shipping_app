import styles from '../app/ui/navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.main_nav}>
            <ul>
                <li>Kierowcy</li>
                <li>Zlecenia</li>
                <li>Klienci</li>
                <li>Test</li>
            </ul>
        </nav>
    )
}

export default Navbar