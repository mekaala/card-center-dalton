import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Providers from './components/Providers';
import SingleProvider from './components/SingleProvider';
import Conditions from './components/Conditions';
import SingleCondtion from './components/SingleCondition';
import Diagnostics from './components/Diagnostics';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ SplashPage }/>
          <Route exact path="/providers" component={ Providers }/>
          <Route path="providers/:providername" component={ SingleProvider }/>
          <Route exact path="/conditions" component={ Conditions }/>
          <Route path="conditions/:conditionname" component={ SingleCondtion }/>
          <Route exact path="/diagnostics" component={ Diagnostics }/>
        </Switch>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;