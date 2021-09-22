import styles from './ProjectForm.module.css'

import React, { useState, useEffect } from 'react'

import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'
import { TextArea } from '../form/TextArea'

export function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || []);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
        // console.log(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    function handleDescription(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={submit} className={styles.form}>

            <Input
                text="Nome do projeto"
                type="text"
                name="name"
                placeholder="Insira o nome do projeto"
                required="true"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            // handleOnChange={e => setproject({ ...project, [project.name]: e.target.value })}
            />

            <Input
                text="Orçamento do projeto"
                type="number"
                name="budget"
                placeholder="Insira o orçamento total"
                required="true"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <Input
                text="Início do Projeto"
                type="date"
                name="initialDate"
                // placeholder={new Intl.DateTimeFormat('pt-BR').format(new Date())}
                // value="01/01/2021"
                required="true"
                handleOnChange={handleChange}
                value={project.initialDate ? project.initialDate : ''}
            // min={new Date()}
            />

            {/* <Input
                text="Equipe Exter na"
                type="checkbox"
                name="externalTime"
                required="false"
                handleOnChange={handleChange}
            /> */}

            <TextArea
                text="Descrição do Projeto"
                name="description"
                placeholder="Digite a descrição do projeto"
                cols="15"
                rows="5"
                required="false"
                handleOnChange={handleDescription}
                value={project.description ? project.description : ''}
            />

            <SubmitButton
                text={btnText}
            />

        </form>
    )
}