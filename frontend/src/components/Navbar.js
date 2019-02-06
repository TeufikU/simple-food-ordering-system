import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    //Function used for logging out users from Dashboard. It removes user data from local storage
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    
    render () {
        return (
            <AppBar position="static" color="default">
            <Toolbar>
            <Link to="/dashboard" >
                <img 
                    src={require('../assets/imgs/logo.png')} 
                    alt="logo" 
                    className="brand-logo" 
                    width="70" 
                    />
            </Link>
            <div className="DashboardMenuRight">
            <Link to="/addnewrestaurant" ><Button color="primary">Add Restaurant</Button></Link>
            <Button onClick={this.logOut.bind(this)} color="primary">Logout</Button>
            </div>
            </Toolbar>
            </AppBar> 
        )
    }
}

export default withRouter(Navbar)