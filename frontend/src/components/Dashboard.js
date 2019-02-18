    import React, { Component } from 'react'
    import Button from '@material-ui/core/Button';
    import { Link } from 'react-router-dom';
    import Navbar from './Navbar';
    import RestaurantsList from './RestaurantsList';
    import Divider from '@material-ui/core/Divider';
    import jwt_decode from 'jwt-decode'
    import { getRestaurants } from './Services'
    import ReactDOM from 'react-dom';
import OrderPanels from './OrderPanels';
import { BrowserRouter as Router } from 'react-router-dom';
    class Dashboard extends Component {

        constructor() {
            super()
            this.state = {
                fullname: '',
                email: '',
                restaurants:[],
                openedRestaurants:[],
                user:[]
            }
        }

        /*If dashboard is loaded then lets save a user data to local storage for later, so we know that the user is logged in*/
        componentDidMount () {
            if(localStorage.getItem('usertoken')!==null){
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({user:{
                fullname: decoded.fullname,
                email: decoded.email,
                } 
            })
        }
        
        const restaurants=
        {
            name:'',
            location: '',
            workinghours: ''
        }

        /*Getting the restaurants list from MongoDb*/
        getRestaurants(restaurants).then(response => {
            if (response) {
                this.setState({restaurants:response})
            }
        }) 
    }
    
        /*Function for displaying panels for food ordering on the right side of Dashboard component*/
        createFoodOrder (restaurantData) {
            if(!this.state.openedRestaurants.includes(restaurantData)){
                this.state.openedRestaurants.push(restaurantData)
        }
            const element = (
                <React.Fragment>
                <OrderPanels openedRestaurants={this.state.openedRestaurants} user={this.state.user}/>
                </React.Fragment>
          );
          ReactDOM.render(element, document.getElementById('panels'));  
        }

        /*Render DOM elements only if user is logged in, instead of that lets prompt that user needs to be logged in to view dashboard page*/
        render () {
            if(localStorage.getItem('usertoken')!==null){
            return (
            <div><Navbar />
            <div className="sidebar">
            <h2 className="textAlignCenter bold">Restaurants</h2>
            <Divider />
            <RestaurantsList restaurants={this.state.restaurants} createFoodOrder={this.createFoodOrder.bind(this)}/>
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