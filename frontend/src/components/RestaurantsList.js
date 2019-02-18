import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class RestaurantsList extends Component {

    constructor() {
        super()
    }

    /*Rendering out a restaurants list from data base on the left side of the Dahboard*/
    render () {
        return (
            
            <div>
                  {
                    this.props.restaurants.map((number) =>
                    <Grid container spacing={12} key={number._id}>
                    <Grid item xs={10}>
                        {number.name}
                    </Grid>
                    <Grid item xs={2}>
                    <Fab color="primary"size="small" flex-end onClick={ this.props.createFoodOrder.bind(null, number) }>
                      <Icon>add_icon</Icon>
                    </Fab>
                    </Grid> 
                    </Grid>  
                    )
                  }
            </div>
        )
    }

}


export default withRouter(RestaurantsList)