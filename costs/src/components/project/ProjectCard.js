import { Link } from 'react-router-dom';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './ProjectCard.module.css';

export function ProjectCard({ id, name, budget, category, initialDate, description, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={styles.cardContainer}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.name.toLowerCase()]}`}></span> {category.name}
            </p>
            <p className={styles.data}>
                <span>Início:</span> {initialDate}
            </p>
            <p className={styles.description}>{description}</p>
            <div className={styles.projectCardActions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Deletar
                </button>
            </div>
        </div >
    )
}