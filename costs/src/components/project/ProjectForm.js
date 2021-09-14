import styles from './ProjectForm.module.css'

import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'

export function ProjectForm({ btnText }) {
    return (
        <form action="" className={styles.form}>

            <Input
                text="Nome do projeto"
                type="text"
                name="name"
                placeholder="Insira o nome do projeto"
            />

            <Input
                text="Orçamento do projeto"
                type="number"
                name="budget"
                placeholder="Insira o orçamento total"
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
            />

            <SubmitButton
                text={btnText}
            />

        </form>
    )
}