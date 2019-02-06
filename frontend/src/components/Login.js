import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { login } from './Services'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //Function for changin input values
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    //Function for sumbitting data from inputs, and to push user to Dashboard component
    onSubmit (e) {
        e.preventDefault()
        if(this.state.email=='' || this.state.password==''){
            this.state.error="You need to fill out all the fields."}
            else{
                const user = {
                    email: this.state.email,
                    password: this.state.password
                }
                login(user).then(res => {
                    if (res) {
                        this.props.history.push('/dashboard')
                    }
                })
            }
            this.setState(this.state)
    }

    render () {
        return (
            <div className="landing-container">
             <Link to="/"><div className="landing-logo"></div></Link>
            <h2 padding-bottom="true">Login</h2>
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidt
                >Login</Button>
            </form>
            <div className="errorMessage">{this.state.error}</div>
            </div>    
        )
    }
}

export default Login