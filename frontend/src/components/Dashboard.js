import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import RestaurantsList from './RestaurantsList';
import Divider from '@material-ui/core/Divider';
const LoginLink = props => <Link to="/login" {...props} />
const RegisterLink = props => <Link to="/register" {...props} />
class Dashboard extends Component {
    render () {
        return (
        <div><Navbar />
        <div class="sidebar">
        <h2 class="textAlignCenter">Restaurants</h2>
        <Divider />
        <RestaurantsList />
        </div>
        </div>   
        
    
        )
    }
}

export default Dashboard