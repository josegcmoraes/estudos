import React, { useState, useEffect } from 'react';

export function Efeitos() {
    const [name, setName] = useState('Maria');
    const [pessoa, setPessoa] = useState({ name: 'Larissa', age: '23' })
    const [nome, setNome] = useState(undefined);

    const onClick = () => setName('Luís');
    const onClick1 = () => { setPessoa({ name: 'Laís' }); console.log(pessoa); };


    // function alterName() {
    //     (name === 'Ana') ? setName('Maria') : setName('Ana');
    // }

    // useEffect(
    //     () => console.log('Efeito:', nome)
    // );

    // useEffect(
    //     () => console.log('Efeito:', nome), []
    // );

    // useEffect(
    //     () => console.log('Efeito:', nome), [nome]
    // );

    useEffect(() => {
        if (nome === undefined) {
            setNome(sessionStorage.getItem('nome') || '');
        } else {
            sessionStorage.setItem('nome', nome)
        }

    }, [nome]);



    return (
        <>
            <h1>Ok</h1>
            <h4>Estados</h4>
            <h5 onClick={onClick1}>{pessoa.age} {pessoa.name}</h5>
            <h5 onClick={onClick}>{name}</h5>
            {/* <button type="button" onClick={alterName}>Alterar Estados</button> */}

            Nome: <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <h3>Ola {nome}</h3>
        </>
    )
}