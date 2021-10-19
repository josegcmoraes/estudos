import { useState } from 'react';
import { Input } from '../form/Input';
import { SubmitButton } from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';

export function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState('');

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        text="nome do servico"
        type="text"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        text="custo do serviço"
        type="number"
        name="cost"
        placeholder="Insira o valor total do serviço"
        handleOnChange={handleChange}
      />
      <Input
        text="descrição do servico"
        type="text"
        name="description"
        placeholder="Insira a descrição do serviço"
        handleOnChange={handleChange}
      />

      <SubmitButton
        text={btnText}
      />
    </form>
  )
}