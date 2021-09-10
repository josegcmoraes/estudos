import { Link } from 'react-router-dom'

import Container from './Container'

import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs_Logo" />
                </Link>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* <li><Link to="/newproject">NewProject</Link></li> */}
                </ul>

            </Container>
        </nav>
    );
}