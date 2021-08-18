import React from 'react';

const NomeContext = React.createElement('nome');

function MeuComponente1() {
    const meuNome = 'Ayrton Teshina 123';
    return (
        React.createElement(NomeContext.Provider, { value: meuNome },
            React.createElement('div', { className: 'componente-1' })
        )
    )
}