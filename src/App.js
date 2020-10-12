import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import  Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
