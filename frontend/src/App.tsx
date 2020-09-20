import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {NavigationBar} from './components/';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { JobsPage } from './pages/JobsPage/JobsPage';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path='/' exact={true} component={LandingPage}/>
        <Route path='/jobs' exact={true} component={JobsPage}/>
        <Route path='/login' component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
