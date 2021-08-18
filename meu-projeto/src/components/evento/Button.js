import styles from './Button.module.css';

export function Button(props) {
    return (
        <button className={styles.Button} type={props.type} onClick={props.event || null}>{props.text}</button>
    )
}