import './App.scss';
import Home from './komponente/Home';
import Navbar from './komponente/Navbar';
import Prva from './komponente/Prva';
import Druga from './komponente/Druga';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/prva' exact component={Prva}/>
        <Route path='/druga' exact component={Druga}/>
      </Switch>

    </Router>
    </>
    
  );
}

export default App;
