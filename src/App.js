import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import Staff from './components/Staff';
import SingleStaff from './components/SingleStaff';
import Conditions from './components/Conditions';
import SingleCondition from './components/SingleCondition';
import Diagnostics from './components/Diagnostics';
import SingleDiagnostic from './components/SingleDiagnostic';
import Services from './components/Services';
import SingleService from './components/SingleService';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ SplashPage }/>
            <Route exact path="/staff" component={ Staff }/>
            <Route path="/staff/:providerUrl" component={ SingleStaff }/>
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