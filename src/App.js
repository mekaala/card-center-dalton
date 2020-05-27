import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Providers from './components/Providers';
import SingleProvider from './components/SingleProvider';
import Conditions from './components/Conditions';
import SingleCondtion from './components/SingleCondition';
import Diagnostics from './components/Diagnostics';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
`       <div className="Title">
          <Link to="/"><h1>Cardiology Center of Dalton</h1></Link>
        </div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ SplashPage }/>
          <Route exact path="/providers" component={ Providers }/>
          <Route path="providers/:providerId" component={ SingleProvider }/>
          <Route exact path="/conditions" component={ Conditions }/>
          <Route path="conditions/:conditionId" component={ SingleCondtion }/>
          <Route exact path="/diagnostics" component={ Diagnostics }/>
        </Switch>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;