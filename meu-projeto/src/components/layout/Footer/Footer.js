import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <br />
            <h5>Rodape</h5>

            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

            <h4> nosso rodape</h4>
            <br />

            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                </span>
            </a>
        </footer>
    )
}