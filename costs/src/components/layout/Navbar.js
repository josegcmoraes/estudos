import { Link } from 'react-router-dom'

import Container from './Container'

import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'
import { useState } from 'react'

export function Navbar() {
    const [userLogged, setUserLogged] = useState("logado");

    function userLogado() {
        if (userLogged === "logado") {
            setUserLogged("deslogado");
        }

    }

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs_Logo" />
                </Link>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* {userLogged == 'deslogado' ?
                        <li><Link to="/login">[Login]</Link></li>
                        :
                        (
                            <>
                                <li><Link to="/perfil">[Perfil:]</Link></li>
                                <li><button onClick={userLogado}>Logout</button></li>
                            </>
                        )
                    } */}


                    {/* <li><Link to="/newproject">NewProject</Link></li> */}
                </ul>

            </Container>
        </nav>
    );
}