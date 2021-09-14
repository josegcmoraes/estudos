import styles from './ProjectForm.module.css'

import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'
import { TextArea } from '../form/TextArea'

export function ProjectForm({ btnText }) {
    return (
        <form action="" className={styles.form}>

            <Input
                text="Nome do projeto"
                type="text"
                name="name"
                placeholder="Insira o nome do projeto"
                required="true"
            />

            <Input
                text="Orçamento do projeto"
                type="number"
                name="budget"
                placeholder="Insira o orçamento total"
                required="true"
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
            />

            <Input
                text="Início do Projeto"
                type="date"
                name="initialDate"
                // placeholder={new Intl.DateTimeFormat('pt-BR').format(new Date())}
                // value="01/01/2021"
                required="true"
                min={new Date()}
            />

            <Input
                text="Equipe Externa"
                type="checkbox"
                name="externalTime"
                required="false"
            />

            <TextArea
                text="Descrição do Projeto"
                name="description"
                placeholder="Digite a descrição do projeto"
                cols="15"
                rows="5"
                required="false"
            />

            <SubmitButton
                text={btnText}
            />

        </form>
    )
}