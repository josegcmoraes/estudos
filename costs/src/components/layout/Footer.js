import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

            <p><span>Costs - </span> &copy; 2021</p>

        </footer>
    )
}