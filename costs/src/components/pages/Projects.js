import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LinkButton } from "../layout/LinkButton";
import { Message } from "../layout/Message";
import Container from "../layout/Container";
import { ProjectCard } from "../project/ProjectCard";

import styles from './Projects.module.css';

export function Projects() {
    const [projetcs, setProjects] = useState([]);

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

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
                {/* <p>Projects...</p> */}

                {projetcs.length > 0 &&
                    (
                        projetcs.map(project => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                budget={project.budget}
                                category={project.category}
                                initialDate={project.initialDate}
                                description={project.description}
                            />
                        ))
                    )
                }
                {/* <ProjectCard/> */}
            </Container>
        </div>
    )
}