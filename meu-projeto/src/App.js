// import logo from './logo.svg';
import { HelloWorld } from './components/HelloWorld';

import './App.css';
import { SayMyName } from './components/SayMyName';
import { Person } from './components/Person';
import { List } from './components/List';
import { Evento } from './components/Evento'

function App() {
  const name = "jose"
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'

  function sum(a, b) {
    return a + b
  }



  return (
    <div>
      {/* // <div className="App"> */}
      {/* <header className="App-header"> */}
      <header className="App-Header">
        <h1>{name} - {newName}</h1>
        <p> Soma {sum(2, 4)}</p>

        <img src={url} alt="imageCenter" />
      </header>

      <main>
        <HelloWorld />
        <br />
        <SayMyName name={name} />
        <SayMyName name="Maria" />
        <SayMyName name="Ricardo" />

        <Person
          urlImageProfile='https://via.placeholder.com/150'
          name="Ricardo"
          age="30"
          profession="programador"
        />
        <List />

        <Evento numero={1} />

      </main>

    </div >
  );
}

export default App;
