    import React, { Component } from 'react'
    import Button from '@material-ui/core/Button';
    import { Link } from 'react-router-dom';
    import Navbar from './Navbar';
    import RestaurantsList from './RestaurantsList';
    import Divider from '@material-ui/core/Divider';
    import jwt_decode from 'jwt-decode'
    class Dashboard extends Component {

        constructor() {
            super()
            this.state = {
                fullname: '',
                email: ''
            }
            
        }

        //If dashboard is loaded then lets save a user data to local storage for later, so we know that the user is logged in
        componentDidMount () {
            if(localStorage.getItem('usertoken')!==null){
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                fullname: decoded.fullname,
                email: decoded.email,
            })
        }
        }

        //Render DOM elements only if user is logged in, instead of that lets prompt that user needs to be logged in to view dashboard page
        render () {
            if(localStorage.getItem('usertoken')!==null){
            return (
            <div><Navbar />
            <div className="sidebar">
            <h2 className="textAlignCenter">Restaurants</h2>
            <Divider />
            <RestaurantsList />
            </div>
            <div id="panels"></div>
            </div>   
            )}else{
                return(
                    <div className="globalMessage">
                    <h1>You must me logged in to view this page!</h1> 
                    <p>Go to login page</p>
                    <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
                    </div>
                )
            }
        }
    }

    export default Dashboard