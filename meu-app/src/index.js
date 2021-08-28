import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App5 from './components/App5';
import { Lista, Item } from './components/Lista';
import Formulario from './components/Formulario';
import { Hello } from './components/Hello';
import { Efeitos } from './components/Efeitos';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      <App2 title="Notícia" >
        notícia veiculada hoje
      </App2>

      <App2 title="Futebol" >
        cruzeiro o maior de minas
      </App2>

      <App3 />
      <br />
      <App5 />
      <Lista>
        erf
        <Item key={9} id={9} completo={false}>item9</Item>
        <Item key={10} id={10} completo={true}>item10</Item>
      </Lista>

      <Formulario />
      <Hello text="News about the world" />
      <Hello>
        <h3>Você em conexão com os assuntos do momento</h3>
      </Hello>

      <Efeitos />
    </>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

