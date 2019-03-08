import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import './RestaurantsList.css'
class RestaurantsList extends Component {

    constructor() {
        super()
    }

    /*Rendering out a restaurants list from data base on the left side of the Dahboard*/
    render () {
        return (
        <React.Fragment>
            {
            this.props.restaurants.map((restaurantList) =>
                <Grid container spacing={12} key={restaurantList._id}>
                <Grid item xs={10}>
                    {restaurantList.name}
                </Grid>
                <Grid item xs={2}>
                    <Fab color="primary" size="small" onClick={ this.props.createFoodOrder.bind(null, restaurantList) }>
                      <Icon>add_icon</Icon>
                    </Fab>
                </Grid> 
                </Grid>  
            )
            }
            </React.Fragment>
        )
    }

}

export default withRouter(RestaurantsList)