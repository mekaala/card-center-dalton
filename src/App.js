import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Providers from './components/Providers';
import SingleProvider from './components/SingleProvider';
import Conditions from './components/Conditions';
import SingleCondition from './components/SingleCondition';
import Diagnostics from './components/Diagnostics';
import SingleDiagnostic from './components/SingleDiagnostic';
import Services from './components/Services';
import SingleService from './components/SingleService';
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
          <Route path="/providers/:providerUrl" component={ SingleProvider }/>
          <Route exact path="/conditions" component={ Conditions }/>
          <Route path="/conditions/:conditionUrl" component={ SingleCondition }/>
          <Route exact path="/diagnostics" component={ Diagnostics }/>
          <Route path="/diagnostics/:diagnosticUrl" component={ SingleDiagnostic }/>
          <Route exact path="/services" component={ Services }/>
          <Route path="/services/:serviceUrl" component={ SingleService }/>
        </Switch>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;