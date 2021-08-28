import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            linguagem: 'JavaScript',
            tipo: 'programador',
            dedico: true,
            bio: ""
        }
        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state)
        }
        this.changeName = (event) => {
            this.setState({ nome: event.target.value });
        }
        this.changeSelect = (event) => {
            this.setState({ linguagem: event.target.value });
        }
        this.changeRadio = (event) => {
            this.setState({ tipo: event.target.value });
        }
        this.changeCheckbox = (event) => {
            this.setState({ dedico: event.target.checked });
        }
        this.changeBio = (event) => {
            this.setState({ bio: event.target.value })
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome: <input
                            type="text"
                            value={this.state.nome}
                            onChange={this.changeName}
                            placeholder="Digite o seu nome"
                        />
                    </label>
                    <br />

                    <label>
                        Linguagem favorita <select
                            value={this.state.linguagem}
                            onChange={this.changeSelect}
                        >
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>Java</option>
                            <option>Php</option>
                            <option>C++</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        Sou: <input
                            type="radio"
                            value="programador"
                            checked={this.state.tipo === "programador"}
                            onChange={this.changeRadio}
                        /> Programador
                        <input
                            type="radio"
                            value="estudante"
                            checked={this.state.tipo === "estudante"}
                            onChange={this.changeRadio}
                        /> Estudante

                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="true"
                            checked={this.state.dedico}
                            onChange={this.changeCheckbox}
                        />
                        Eu dedico 8 horas para meus estudos
                    </label>
                    <br />
                    <label>
                        Bio:
                        <textarea
                            cols="40"
                            rows="3"
                            value={this.state.bio}
                            onChange={this.changeBio}
                        />

                    </label>

                    <br />
                    <input type="submit" value="Salvar" />
                </form>
            </>
        )
    }
}

export default Formulario;
