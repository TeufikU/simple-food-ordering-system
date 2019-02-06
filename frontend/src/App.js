import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingHome from './components/LandingHome';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddNewRestaurant from './components/AddNewRestaurant'
class App extends Component {
  render () {
    return (
      //Connecting all component pieces of this Web APP and listing them in App Div
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingHome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addnewrestaurant" component={AddNewRestaurant} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
