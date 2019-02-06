    import React, { Component } from 'react'
    import Button from '@material-ui/core/Button';
    import { Link } from 'react-router-dom';
    import Navbar from './Navbar';
    import TextField from '@material-ui/core/TextField';
    import { addRestaurant } from './Services'

    class AddNewRestaurant extends Component {
        constructor() {
            super()
            this.state = {
                name: '',
                location: '',
                workinghours: '',
                error: ''
            }
            this.onChange = this.onChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
        }

        onChange (e) {
            this.setState({ [e.target.name]: e.target.value })
        }

        //Adding new restaurant name on button click for sumbit
        onSubmit (e) {
            e.preventDefault()

            if(this.state.name!=='' && this.state.location!=='' && this.state.workinghours!==''){
                    const restaurant = {
                        name: this.state.name,
                        location: this.state.location,
                        workinghours: this.state.workinghours
                    }
                    addRestaurant(restaurant).then(res => {
                        this.props.history.push('/dashboard')
                    })
                }
                else{
                    this.state.error="You need to type in a valid E-Mail adress."
                }
                this.setState(this.state)
        }

        //Creating form elements in dashboard DOM
        render () {
            return (
                <div className="Container">
                <Navbar />
                <div>
                <h2 padding-bottom="true">New Restaurant</h2>
                <form noValidate onSubmit={this.onSubmit}>
                    <TextField
                        id="name"
                        name="name"
                        margin="normal"
                        variant="standard"
                        color="primary"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                        fullWidth
                    />
                    <TextField
                        id="location"
                        name="location"
                        margin="normal"
                        variant="standard"
                        color="primary"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={this.onChange}
                        fullWidth
                    />
                    <TextField
                        id="workinghours"
                        name="workinghours"
                        margin="normal"
                        variant="standard"
                        color="primary"
                        placeholder="Working Hours"
                        value={this.state.workinghours}
                        onChange={this.onChange}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>Add Restaurant</Button>
                </form>
                <div className="errorMessage">{this.state.error}</div>
                </div>
                </div>   
                )
        }
    }

    export default AddNewRestaurant