import React from 'react';

class App5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: undefined,
            txtNome: "",
            idade: 26
        };
    }

    changeTxtName = (event) => {
        this.setState({ txtNome: event.target.value })
    }

    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome');
        if (nome) {
            this.setState({ nome })
        }
    }

    salvar = () => {
        this.setState({ nome: this.state.txtNome })
        sessionStorage.setItem('nome', this.state.txtNome)
    }

    render() {

        const renderForm = () => {
            return (
                <>
                    Nome:<input type="text" placeholder="Digite seu nome:" value={this.state.txtNome} onChange={this.changeTxtName} />
                    <button type="button" onClick={this.salvar}>Salvar</button>
                </>
            )
        }
        const renderTxt = () => {
            return (
                <p>Olá {this.state.nome}</p>
            )
        }

        return (
            !this.state.nome ? renderForm() : renderTxt()
        );
    }
}

export default App5;