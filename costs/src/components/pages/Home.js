import savings from '../../img/savings.svg';

import styles from './Home.module.css';
import { LinkButton } from "../layout/LinkButton";

export function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projetos" />
            <img src={savings} alt="Costs" />

        </section>
    );
}