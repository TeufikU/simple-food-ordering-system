import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingHome from './components/LandingHome/LandingHome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import AddNewRestaurant from './components/AddNewRestaurant/AddNewRestaurant'

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
