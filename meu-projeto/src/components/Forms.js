import React, { useState } from 'react'
// import Switch from 'react-switch';

export function Forms(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [price, setPrice] = useState(0);
    const [city, setCity] = useState('Belo Horizonte - MG');
    const [service, setService] = useState();
    const [description, setDescription] = useState('');

    // const [checkedA, setCheckedA] = useState(true);
    // const [checkedB, setCheckedB] = useState(false)


    function cadastrarUsuario(e) {
        e.preventDefault();
        // alert('Cadastrou usúario')
        console.log(`
            \n
            cadastrou usúario
            nome:${name} 
            senha:${password}
            preco:${price}
            cidade:${city}
            serviços:${service}
            Descrição:${description}
        `)
        props.openForm();
    }
    return (
        <>
            <h1>Formulário</h1>

            <form onSubmit={cadastrarUsuario}>
                {/* value={title}
                onChange={event => setTitle(event.target.value)} */}
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Digite o seu nome"
                />
                <br />

                <label htmlFor="password">Senha: </label>
                <input
                    id="passsword"
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Digite a sua senha"
                />
                <br />

                <label htmlFor="price">Preço: </label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                    placeholder="Digite o preço"

                />
                <br />

                <label htmlFor="service">Serviços</label>



                <br />

                <label htmlFor="city">Cidade: </label>
                <select
                    name="city"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    id=""
                >
                    <option value="Belo Horizonte - MG">Belo Horizonte - MG</option>
                    <option value="São Paulo - SP">São Paulo - SP</option>
                    <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                    <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                    <option value="Brasília - DF">Brasília - DF</option>
                    <option value="Curitiba - PR">Curitiba - PR</option>

                </select>
                <br />

                <label htmlFor="description">Descrição: </label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                >
                </textarea>
                <br />


                {/* npm install react-switch */}
                {/* <Switch
                    checked={checkedA}
                    onChange={event => setCheckedA(event.target.value)}
                    value="checkedA"

                /> */}

                {/* <label htmlFor="image">Imagem</label>
                <input
                    type="image"
                    src=""
                    alt=""
                /> */}

                {/* <input type="submit" value="Cadastrar" /> */}
                <button type='submit' value="Cadastrar">Enviar</button>
            </form>
        </>
    )
}