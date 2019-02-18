import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
class OrderPanels extends Component {
    constructor() {
        super()
        this.state = {
            restaurants:[],
            openedRestaurants:[],
            user:[],
            foodOrder:{
                user: '',
                restaurantName: '',
                orderDate: '',
            },
            foodName:'',
        }
        this.onChange = this.onChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
    }

    /*Function for changin input values*/
    onChange (e) {
        this.setState({ foodName: e.target.value })
    }

    /*Function for sumbitting data from input and saving It to the MongoDb as a food name order with other required data*/
    onSubmit (foodOrderName) {
        if(this.state.foodName!==''){
            const foodOrder = {
                user: this.props.user.email,
                restaurantName: foodOrderName.name,
                foodName: this.state.foodName,
                orderDate: new Date(),
            }
           console.log(foodOrder)
        }
    }
    /**Function for removing restaurant panel for ordering food from the right side of the dashboard*/
    removePanel(restaurantPanel){
        this.props.openedRestaurants.splice(this.props.openedRestaurants.indexOf(restaurantPanel),1)
        this.forceUpdate();
    }

    render () {
        return (
            <React.Fragment>
                {
                this.props.openedRestaurants.map((number) =>
                <div className="panelRestaurantItem" key={number._id}>
                <Fab className="restaurantPanelClose" size="small" color="primary" size="small" onClick={this.removePanel.bind(this,number)}>
                    <Icon>close_icon</Icon>
                </Fab>
                <h2 padding-bottom="true">{number.name}</h2>
                <form noValidate onSubmit={this.onSubmit(number)}>
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <TextField
                            id="foodName"
                            name="foodName"
                            margin="normal"
                            variant="standard"
                            color="primary"
                            placeholder="New Order"
                            value={this.state.foodName}
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
                    )}
                </React.Fragment> 
        )
    }
}

export default OrderPanels