import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {isUserLoggedIn} from '../../Helpers/Functions'
import './LandingHome.css'

const LoginLink = props => <Link to="/login" {...props} />
const RegisterLink = props => <Link to="/register" {...props} />

class LandingHome extends Component {

    componentDidMount(){
        isUserLoggedIn(this.props,'usertoken')
    }

    render () {
        return (
        <div className="landinghome-container">
        <Link to="/"><div className="landinghome-logo"></div></Link>        
        <h2 padding-bottom="true">Wellcome</h2>
            <ul>
                <li>
                    <Button component={LoginLink} variant="contained" color="primary" fullWidth>Log In</Button>
                </li>
                <li>
                    <Button  component={RegisterLink} variant="contained" color="primary" fullWidth>Register</Button>
                </li>
            </ul>
        <div className="DashboardContent">
        </div>
        </div>    
        )
        }
    }

    export default LandingHome