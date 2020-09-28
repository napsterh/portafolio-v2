import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Router path="/"/>
        </Switch>
      </Router>
  );
}

export default App;
