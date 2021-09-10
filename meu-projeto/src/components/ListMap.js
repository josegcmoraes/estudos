import styles from './ListMap.module.css';


export function ListMap({ itens }) {
    return (
        <div className={styles.Container}>
            <h1>Renderizando listas</h1>
            <h3>Lista de tecnologias</h3>

            {/* {
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            } */}

            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>Lista vazia</p>
                )
            }


        </div>
    )
}