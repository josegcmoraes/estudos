import React from 'react'

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
        <p>criando conteúdo</p>
        <p>Data de hoje</p>
        <p>{new Date().toLocaleDateString('pt-br')}</p>
      </>
    );

  }
}

export default App;
