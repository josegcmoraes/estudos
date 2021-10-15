import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Loading } from '../layout/Loading';
import Container from '../layout/Container';
import { ProjectForm } from '../project/ProjectForm';

import styles from './Project.module.css';
import { Message } from '../layout/Message';


export function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

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

    function editPost(project) {
        // console.log(project)
        // budget validation
        setMessage('')
        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo total do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(res => res.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado com sucesso!')
                setType('sucess')
            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <div>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
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
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="concluir edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>

                    <div className={styles.serviceFormContainer}>
                        <h2>Adicione um serviço:</h2>
                        <button
                            className={styles.btn}
                            onClick={toggleServiceForm}
                        >
                            {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                        </button>

                        <div className={styles.projectInfo}>
                            {showServiceForm && <div>Formulário do serviço</div>}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        <p>Itens do serviço</p>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}