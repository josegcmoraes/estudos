
export function Saudacao({ nome }) {

    function gerarSaudacao(nome) {
        return `Bem vindo: ${nome}`
    }
    return (
        <div>
            {nome &&
                <p>{gerarSaudacao(nome)}</p>
            }
        </div>

    )
}