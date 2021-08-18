import React, { useState } from 'react'

export function Forms(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function cadastrarUsuario(e) {
        e.preventDefault();
        // alert('Cadastrou usúario')
        console.log(`cadastrou usúario \nnome:${name} senha:${password}`)
        props.openForm();
    }
    return (
        <>
            <h1>Formulário</h1>

            <form onSubmit={cadastrarUsuario}>
                {/* value={title}
                onChange={event => setTitle(event.target.value)} */}
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Digite o seu nome"
                />

                <label htmlFor="password">Senha</label>
                <input
                    id="passsword"
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Digite a sua senha"
                />

                {/* <input type="submit" value="Cadastrar" /> */}
                <button type='submit' value="Cadastrar">Enviar</button>
            </form>
        </>
    )
}