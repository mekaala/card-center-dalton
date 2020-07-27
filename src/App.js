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
import Health from './components/Health';
import SingleHealth from './components/SingleHealth'
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Diseases from './components/Diseases';
import Arrythmias from './components/Arrythmias';
import HeartBlock from './components/HeartBlock';
import Symptoms from './components/Symptoms';

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
            <Route exact path="/conditions/diseases" component={ Diseases }/>
            <Route exact path="/conditions/arrythmias" component={ Arrythmias }/>
            <Route exact path="/conditions/heart-block" component={ HeartBlock }/>
            <Route exact path="/conditions/symptoms" component={ Symptoms }/>
            <Route path="/conditions/:conditionUrl" component={ SingleCondition }/>
            <Route exact path="/diagnostics" component={ Diagnostics }/>
            <Route path="/diagnostics/:diagnosticUrl" component={ SingleDiagnostic }/>
            <Route exact path="/health" component={ Health }/>
            <Route path="/health/:healthUrl" component={ SingleHealth }/>
          </Switch>
          <Contact/>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;