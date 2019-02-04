import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, withRouter} from 'react-router-dom'

const LendingHome = props => <Link to="/" {...props} />


class Navbar extends Component {
    render () {
        return (
           
     
            <AppBar position="static" color="default">
            <Toolbar>
            <Link to="/dashboard" ><img src={require('../assets/imgs/logo.png')} alt="logo" className="brand-logo" width="70" /></Link>
            <div class="DashboardMenuRight">
            <Button color="primary">Add Restaurant</Button>
            <Button component={LendingHome} color="primary">Logout</Button>
            </div>
            </Toolbar>
            </AppBar> 
        )
    }
}

export default withRouter(Navbar)