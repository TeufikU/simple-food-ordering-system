import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
const LoginLink = props => <Link to="/login" {...props} />
const RegisterLink = props => <Link to="/register" {...props} />
class LandingHome extends Component {
    render () {
        return (
           
     
    <div class="landing-container">

    <Link to="/"><div class="landing-logo"></div></Link>        
    <h2 padding-bottom>Wellcome</h2>
            <ul>
                <li>
                    <Button component={LoginLink} variant="contained" color="primary" fullWidth>Log In</Button>
                </li>
                <li>
                    <Button  component={RegisterLink} variant="contained" color="primary" fullWidth>Register</Button>
                </li>
            </ul>
        <div class="DashboardContent">
        
        </div>
    </div>    
        )
    }
}

export default LandingHome