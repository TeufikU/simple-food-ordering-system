import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'

class Register extends Component {
    render () {
        return (
           
     
    <div class="landing-container">
        
        <Link to="/"><div class="landing-logo"></div></Link>
        <h2 padding-bottom>Registration</h2>
            <form>
            <TextField id="email" label="E-mail" margin="normal" variant="outlined" fullWidth color="secondary" />
            <TextField id="fullname" label="Full name" margin="normal" variant="outlined" fullWidth color="secondary" />
            <TextField id="password" type="password" label="Password" margin="normal" variant="outlined" fullWidth color="secondary" />
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
            </form>
    </div>    
        )
    }
}

export default Register