import { Phrase } from "./Phrase"
import styles from "./HelloWorld.module.css";

export function HelloWorld() {
    return (
        <>
            <div className={styles.Container}>
                <Phrase />
                <h1>Componente!</h1>
                <Phrase />
                <Phrase />
                <Phrase />
            </div>
        </>
    )
}