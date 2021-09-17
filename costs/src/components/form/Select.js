import styles from './Select.module.css'

// export function Select({ text, name, options, value, handleOnChange }) {
export function Select({ text, name, options, value, handleOnChange }) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {
                    options.map((option) => (
                        <option value={option.id} key={option.id}>{option.name}</option>
                    ))
                }

            </select>
        </div>
    )
}
// {options.map(option => (
//     <option value={value}>{option}</option>
// ))} 