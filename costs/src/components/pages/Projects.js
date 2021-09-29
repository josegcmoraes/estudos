import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LinkButton } from "../layout/LinkButton";
import { Message } from "../layout/Message";
import Container from "../layout/Container";
import { ProjectCard } from "../project/ProjectCard";

import styles from './Projects.module.css';
import { Loading } from "../layout/Loading";

export function Projects() {
    const [projetcs, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 500)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                setProjects(projetcs.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))

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
            {projectMessage && <Message type="success" msg={projectMessage} />}

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
                                handleRemove={removeProject}
                            />
                        ))
                    )
                }

                {!removeLoading && <Loading />}
                {removeLoading && projetcs.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}

                {/* <ProjectCard/> */}
            </Container>
        </div>
    )
}