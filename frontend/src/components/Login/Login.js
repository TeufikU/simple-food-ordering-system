import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { login } from '../Services'
import { isUserLoggedIn } from '../../Helpers/Functions'
import GlobalMessage from '../GlobalMessage/GlobalMessage'
import './Login.css'

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

    componentDidMount(){
        isUserLoggedIn(this.props,'usertoken')
    }

    /*Function for changin input values*/
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /*Function for sumbitting data from inputs, and to push user to Dashboard component*/
    onSubmit (e) {
        e.preventDefault()
        if(this.state.email==='' || this.state.password===''){
            this.state.error="You need to fill out all the fields."
        }else{
                const user = {
                    email: this.state.email,
                    password: this.state.password
                }
                login(user).then(res => {
                    this.setState({error:res.error})
                    if (!res.error) {
                        this.props.history.push('/dashboard')
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
            this.setState(this.state)
    }

    render () {
        return (
        <div>
            <div className="login-container">
             <Link to="/"><div className="login-logo"></div></Link>
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
                    className="login-submit-button"
                    type="submit"
                    variant="contained"
                    color="primary"
                >Login</Button>
            </form>
            <GlobalMessage error={this.state.error} />
            </div>
        </div>  
        )
    }
}

export default Login