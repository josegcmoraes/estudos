import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: undefined,
            txtNome: "",
            idade: 26
        };
        // this.changeName = this.changeName.bind(this)
    }
    // changeName = function (event) {
    //     this.setState({ nome: event.target.value })
    // }
    changeTxtName = (event) => {
        this.setState({ txtNome: event.target.value })
    }
    salvar = () => {
        this.setState({ nome: this.state.txtNome })
    }

    render() {
        // if (!this.state.nome) {
        //     return (
        //         <>
        //             Nome:<input type="text" placeholder="Digite seu nome:" value={this.state.txtNome} onChange={this.changeTxtName} />
        //             <button type="button" onClick={this.salvar}>Salvar</button>

        //         </>
        //     )
        // } else {
        //     return (
        //         <>
        //             <p>Olá {this.state.nome}</p>
        //         </>
        //     );
        // }

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

        // return (
        //     <>
        //         {if (!this.state.nome) ?()
        //         Nome:<input type="text" placeholder="Digite seu nome:" value={this.state.txtNome} onChange={this.changeTxtName} />
        //         <button type="button" onClick={this.salvar}>Salvar</button>
        //         ) : (
        //         <p>Olá {this.state.nome}</p>
        //         )
        //         }

        //     </>
        // );
    }
}

export default App3;