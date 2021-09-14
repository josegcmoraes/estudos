import styles from './TextArea.module.css'

export function TextArea({ text, name, placeholder, cols, rows, value, handleOnChange, required }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <textarea
                name={name}
                id={name}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                value={value}
                onChange={handleOnChange}
                required={required === "true"}
            ></textarea>
        </div>
    )
}