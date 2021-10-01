import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Project.module.css';

export function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
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

    }, [id])

    return (
        <div>
            <h1>projeto: </h1>
            <h1>{id}  </h1>
            <h1>{project.name}</h1>
        </div>
    )
}