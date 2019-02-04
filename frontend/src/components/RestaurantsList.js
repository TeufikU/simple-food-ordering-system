import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, withRouter} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
class RestaurantsList extends Component {


    render () {
        return (

<div class="items">
    <Grid container spacing={12}>
        <Grid item xs={10}>
              Čaršijska Česma
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary"size="small" flex-end onClick={ this.toggleDiv }>
                    <Icon>add_icon</Icon>
                </Fab>
        </Grid>
        <Grid item xs={10}>
              Limenka
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary"size="small" flex-end>
                    <Icon>add_icon</Icon>
                </Fab>
        </Grid>
        <Grid item xs={10}>
              Sarajka
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary"size="small" flex-end>
                    <Icon>add_icon</Icon>
                </Fab>
        </Grid>
        <Grid item xs={10}>
              Mama Mia
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary"size="small" flex-end>
                    <Icon>add_icon</Icon>
                </Fab>
        </Grid>
            
    </Grid>
    </div>
        )
    }

}


export default withRouter(RestaurantsList)