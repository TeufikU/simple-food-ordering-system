import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { orderFood } from '../Services';
import { todaysDate, removePanel, deleteOrder } from '../../Helpers/Functions';
import './OrderPanels.css'

class OrderPanels extends Component {
    constructor(props) {
        super()
        this.state = {
            restaurants:[],
            openedRestaurants: [],
            user:[],
            respo:[]
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        props.ordersList.map((response) =>{
            this.setState({["rest"+response._id] : ''})
            console.log("rest"+response._id)
        })  

    }

    /*Function for changin input values*/
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /*Function for sumbitting data from input and saving It to the MongoDb as a food name order with other required data*/
    onSubmit (e,newOrder) {
        e.preventDefault();
        const foodOrder={
            user: this.props.user.fullname,
            restaurantName: newOrder.name,
            foodName: this.state["rest"+newOrder._id],
            orderDate: todaysDate(),
        }
        if(!this.state["rest"+newOrder._id]==''){
            orderFood(foodOrder).then(res=>{
            this.props.ordersList.push({...foodOrder,_id:res.data._id})  
            this.forceUpdate()
            })  
        }
        e.target.reset()
    }

    render () {
        return (
        this.props.openedRestaurants.map((response)=>{
            return <div className="panelRestaurantItem" key={response._id}>
                <Fab className="restaurantPanelClose" size="small" color="primary" size="small" onClick={()=>removePanel(this,response)}>
                    <Icon>close_icon</Icon>
                </Fab>
                <div className="panelHeader">
                <h2 padding-bottom="true">{response.name}</h2>
                <h3>{response.location}</h3>
                <p>Working hours: {response.workinghours}h</p>
                </div>
                <div className="orders">
                {
                    this.props.ordersList.map((res)=>{
                        if(response.name==res.restaurantName){
                        return <Grid container spacing={12} key={res._id}>
                        <Grid item xs={10}>
                            <h4>{res.foodName}</h4>
                            <p>{res.user}</p>
                        </Grid>
                        <Grid item xs={2}>
                        <Fab type="submit" className="removeFoodOrder" disabled={this.props.user.fullname!==res.user} key={res._id} size="small" color="primary" onClick={deleteOrder.bind(this,res._id)}>
                        <Icon>remove_icon</Icon>
                        </Fab>
                        </Grid> 
                    </Grid> 
                    }
                    })
                }
                </div> 
                <form noValidate onSubmit={(e)=>this.onSubmit(e,response)}>
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <TextField
                            id="foodName"
                            InputProps={this.props.ordersList}
                            name={"rest"+response._id}
                            margin="normal"
                            variant="standard"
                            color="primary"
                            placeholder="New Order"
                            value={this.state[response._id]}
                            onChange={this.onChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                    <Fab type="submit" className="restaurantPanelClose" size="small" color="primary" size="small">
                    <Icon>add_icon</Icon>
                    </Fab>
                    </Grid> 
                </Grid>  
                </form>
                </div>
                })
            )  
    }
}

export default OrderPanels