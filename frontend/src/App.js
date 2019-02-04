import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingHome from './components/LandingHome';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingHome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
