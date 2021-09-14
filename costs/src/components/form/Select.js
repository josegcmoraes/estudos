import styles from './Select.module.css'

// export function Select({ text, name, options, value, handleOnChange }) {
export function Select({ text, name }) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>

            </select>
        </div>
    )
}
// {options.map(option => (
//     <option value={value}>{option}</option>
// ))} 