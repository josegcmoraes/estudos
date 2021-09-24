import { useLocation } from "react-router-dom";

import { LinkButton } from "../layout/LinkButton";
import { Message } from "../layout/Message";
import Container from "../layout/Container";

import styles from './Projects.module.css';

export function Projects() {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>My Project</h1>
                <LinkButton to="/newproject" text="Criar Projetos" />
            </div>
            {
                message && <Message type="success" msg={message} />
            }
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>
    )
}