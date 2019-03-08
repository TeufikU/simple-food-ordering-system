import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Divider from '@material-ui/core/Divider';
import jwt_decode from 'jwt-decode'
import { getRestaurants } from '../Services'
import { getOrderList } from '../Services'
import OrderPanels from '../OrderPanels/OrderPanels';
import { todaysDate } from '../../Helpers/Functions';
import './Dashboard.css'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
                fullname: '',
                email: '',
                restaurants:[],
                ordersList:[],
                user:[]
            }
    }

    /*If dashboard is loaded then lets save a user data to local storage for later, so we know that the user is logged in*/
    componentDidMount () {

        if(localStorage.getItem('usertoken')!==null){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({user:{
            id: decoded._id,
            fullname: decoded.fullname,
            email: decoded.email,
            } 
        })
    }
        
    const restaurant={
            name:'',
            location: '',
            workinghours: '',
    }

    getOrderList(todaysDate()).then(response=>{
            this.setState({ordersList: response})
    })

    /*Getting the restaurants list from MongoDb*/
    getRestaurants(restaurant).then(response => {
        const restaurants = response.map(order => ({ ...order, isOpened: false}))
        this.setState({ restaurants } )
    })   
    }
    
    createFoodOrder(something){
        something.isOpened=true;
        this.forceUpdate();
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
            <div id="panels">
            <OrderPanels ordersList={this.state.ordersList} openedRestaurants={this.state.openedRestaurants} restaurants={this.state.restaurants} user={this.state.user} />
            </div>
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