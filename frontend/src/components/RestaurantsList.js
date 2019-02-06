import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import { getRestaurants } from './Services'

class RestaurantsList extends Component {

    constructor() {
        super()
        this.state = []

    }

    //If component is mounted in DOM, then create an object with restoraunts data from database
    componentDidMount () {
        const restaurant = {
             name: this.state.name,
             location: this.state.location,
             workinghours:''
        }
       getRestaurants(restaurant).then(res => {
             if (res) {
                this.state=res;
                 console.log(this.state)
                }
         })
            //this.setState(this.state)
    }

    //Creating DOM elements with restaurants data from database
    render () {
        return (
            <Grid container spacing={12}>
            <Grid item xs={10}>
              {this.state.name}
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary"size="small" flex-end onClick={ this.toggleDiv } onClick={this.creatediv}>
                    <Icon>add_icon</Icon>
                </Fab>
            </Grid>    
            </Grid>
        )
    }

    //This function is showing a h3 tag for now, but in new update of this code there will be a panels for making food orderings
    creatediv(){
        const element = (
            <div>
              <h3>Here We'll have ability to order some food soon.</h3>
            </div>
          );
          ReactDOM.render(element, document.getElementById('panels'));
        }
}


export default withRouter(RestaurantsList)