import React from 'react';
import { useEffect, useState } from 'react';

import logo from './logo.svg';

import './App.css';



// const NomeContext = React.createContext('nome');
// function MeuComponente1() {
//   const meuNome = 'Ayrton Teshima 14';
//   return (
//     <NomeContext.Provider value={meuNome}>
//       <div className="componente-1">
//         <MeuComponente2 />
//       </div>
//     </NomeContext.Provider>
//   )
// }

function MeuComponente1(props) {
  const meuNome = 'Ayrton Teshima 14';
  return (
    <div className="componente-1">
      <MeuComponente2 >
        <p>Componente 1 - Envio de p para o header de componente 2</p>
        <MeuComponente3 nome={meuNome} onClickIncrementContador={props.onClickIncrementContador} />
      </MeuComponente2>
    </div>
  )
}

function MeuComponente2(props) {
  return (
    <div className="componente-2">
      <div>
        <header>
          {props.children}
        </header>
        <footer>
          <p>footer de componente 2</p>
        </footer>
        {/* <MeuComponente3 /> */}
      </div>
    </div>
  )
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = useState('21 988887777');

  setTimeout(function () {
    setTelefone('11 011119999');
  }, 1500)

  return (
    <div className="componente-3">
      <MeuComponente4 telefone={telefone} onClickIncrementContador={props.onClickIncrementContador} />
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = useState(28);

  setTimeout(function () {
    setIdade(29);
  }, 1000)
  return (
    <div className="componente-4">
      {/* <p>{props.incrementContador}</p> */}
      <p>Componente 4 - {props.nome} - idade: {idade} - telefone: {props.telefone}</p>
      <button type="button" onClick={props.onClickIncrementContador}>incrementar</button>
    </div>
  )
}

function MeuComponente(props) {
  return (
    <div id="componente">
      <p>Componente1</p>
      <MeuComponente1 onClickIncrementContador={props.onClickIncrementContador} />
      {/* <button type="button" onClick={props.onClickIncrementContador}>incrementar</button> */}

    </div>
  )
}

function MeuComponenteIrmao(props) {
  return (
    <div id="componente-irmao">
      <h1>Componente irmão</h1>
      <MeuComponenteIrmao2 contador={props.contador} />
    </div>
  )
}

function MeuComponenteIrmao2(props) {
  useEffect(() => {
    localStorage.setItem('contador', String(props.contador))
  })
  return (
    <h2>Contador: {props.contador}</h2>
  )
}

function AppComponent() {
  const [contador, setContador] = useState(Number(localStorage.getItem('contador')) || 0);
  const incrementContador = function () {
    setContador(contador + 1);
  }
  return (
    <>
      <MeuComponenteIrmao contador={contador} />
      <MeuComponente onClickIncrementContador={incrementContador} />

    </>
  )
}

function App() {
  return (
    <div className="App">
      <AppComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
