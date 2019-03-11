import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Divider from '@material-ui/core/Divider';
import { getRestaurants } from '../Services'
import { getOrderList } from '../Services'
import OrderPanels from '../OrderPanels/OrderPanels';
import MustBeLoggedIn from '../MustBeLoggedIn/MustBeLoggedIn';
import { todaysDate, registerUserInBrowser, createFoodOrder, isRestaurantOpenedAndPopulated } from '../../Helpers/Functions';
import './Dashboard.css'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
                fullname: '',
                email: '',
                restaurants:[],
                ordersList:[],
                openedRestaurants:[],
                user:[]
            }
    }

    /*If dashboard is loaded then lets save a user data to local storage for later, so we know that the user is logged in*/
    componentDidMount () {
        this.setState(registerUserInBrowser('usertoken'))
        getOrderList(todaysDate()).then(response=>{
            this.setState({ordersList: response})
        })

        getRestaurants({restaurantname:''}).then(response => {
            if(!response.status){
            const restaurants = response;
            const openedRestaurants = isRestaurantOpenedAndPopulated(restaurants,this.state.ordersList)
            this.setState({openedRestaurants, restaurants})
            }else{
                this.setState({status: response.status})
            }
        })
    }
    

    /*Render DOM elements only if user is logged in, instead of that lets prompt that user needs to be logged in to view dashboard page*/
    render () {
            if(localStorage.getItem('usertoken')!==null){
                if(!this.state.status){
            return (
            <div>
                <Navbar />
                <div className="sidebar">
                    <h2 className="textAlignCenter bold">Restaurants</h2>
                    <Divider />
                    <RestaurantsList restaurants={this.state.restaurants} createFoodOrder={createFoodOrder.bind(this,this.state.openedRestaurants)}/>
                </div>
                <div id="panels">
                    <OrderPanels ordersList={this.state.ordersList} openedRestaurants={this.state.openedRestaurants} restaurants={this.state.restaurants} user={this.state.user} />
                </div>
            </div>   
            )}else{
                return (
                    <div>
                        <Navbar />
                        <div className="sidebar">
                            <h2 className="textAlignCenter bold">Restaurants</h2>
                            <Divider />
                            <h3>There is no restaurants added</h3>
                        </div>
                        <div id="panels">
                            <OrderPanels ordersList={this.state.ordersList} openedRestaurants={this.state.openedRestaurants} restaurants={this.state.restaurants} user={this.state.user} />
                        </div>
                    </div> 
                )  
            }
        }else{
                return(
                  <MustBeLoggedIn />  
                )
            }
        }
    }

    export default Dashboard