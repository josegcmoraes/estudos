import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Loading } from '../layout/Loading';
import styles from './Project.module.css';
import Container from '../layout/Container';

export function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <div>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className={styles.btn}
                                onClick={toggleProjectForm}
                            >
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>

                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>

                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>

                                    <p>
                                        <span>Data de início:</span> {project.initialDate}
                                    </p>

                                    <p>
                                        <span>Descrição:</span> {project.description}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    {/* <ProjectForm /> */}
                                </div>
                            )}
                        </div>

                    </Container>
                </div>

            ) : (
                <Loading />
            )}
        </div>
    )
}