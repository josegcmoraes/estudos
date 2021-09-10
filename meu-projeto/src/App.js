import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Contato } from './pages/Contato';
import { Empresa } from './pages/Empresa';
import { Home } from './pages/Home';

import './App.css';
import { NavBar } from './components/layout/NavBar/NavBar';

function App() {

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/empresa"><Empresa /></Route>
        <Route path="/contato"><Contato /></Route>
      </Switch>

    </Router>
  );
}

export default App;
