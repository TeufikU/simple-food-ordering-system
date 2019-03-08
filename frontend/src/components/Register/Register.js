import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { register } from '../Services'
import './Register.css'
class Register extends Component {

    /*Creating array of data and bind changes on created events*/
    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            password: '',
            error: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /*This function is used for changing the values of every input*/
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /*Function for determining if submit button was clicked so we can save our data from input values to our database*/
    onSubmit (e) {
        e.preventDefault()
        //If input values are not zero
        if(this.state.email!=='' && this.state.fullname!=='' && this.state.password!==''){
            const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            /*Checking if user type in a right E-mail adress*/
            if(this.state.email.match(emailformat)){
                const user = {
                    fullname: this.state.fullname,
                    email: this.state.email,
                    password: this.state.password
                }
                register(user).then(res => {
                    this.props.history.push(`/login`)
                })
            }
            else{
                this.state.error="You need to type in a valid E-Mail adress."
            }}else{
                this.state.error="You need to type in all the required fields."
            }
            this.setState(this.state)
    }

render () {
    return (
    <div className="register-container">
        <Link to="/"><div className="register-logo"></div></Link>
        <h2 padding-bottom="true">Registration</h2>
            <form noValidate onSubmit={this.onSubmit}>
            <TextField
                id="email"
                name="email"
                label="E-mail"
                margin="normal"
                variant="standard"
                color="secondary"
                value={this.state.email}
                onChange={this.onChange}
                fullWidth
            />
            <TextField
                id="fullname"
                name="fullname"
                label="Full name"
                margin="normal"
                variant="standard"
                color="secondary"
                value={this.state.fullname}
                onChange={this.onChange}
                fullWidth
            />
            <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                margin="normal"
                variant="standard"
                color="secondary"
                value={this.state.password}
                onChange={this.onChange}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
            </form>
            <div className="errorMessage">{this.state.error}</div>
    </div>    
        )
    }
}

export default Register