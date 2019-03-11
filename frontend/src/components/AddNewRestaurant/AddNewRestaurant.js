import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import { addRestaurant } from '../Services'
import './AdNewRestaurant.css'


class AddNewRestaurant extends Component {
    constructor() {
        super()
        this.state=''
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /*Adding new restaurant name on button click for sumbit*/
    onSubmit (e) {
        e.preventDefault()
        if(this.state.name!=='' && this.state.location!=='' && this.state.workinghoursFrom!=='' && this.state.workinghoursTo!==''){
            const restaurant = {
                name: this.state.name,
                location: this.state.location,
                workinghours: this.state.workinghoursFrom + " - " + this.state.workinghoursTo
            }
            
            addRestaurant(restaurant).then(res => {
                this.props.history.push('/dashboard')
                })
            }
            else{
                this.state.error="You need to fill out all the fields."
            }
            this.setState(this.state)
    }

    /*Creating form elements in dashboard DOM*/
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
                <label>Working Hours:
                    <TextField
                        id="workinghoursFrom"
                        name="workinghoursFrom"
                        margin="normal"
                        variant="standard"
                        color="primary"
                        placeholder="From"
                        value={this.state.workinghours}
                        onChange={this.onChange}
                        fullWidth
                    />
                    <TextField
                        id="workinghoursTo"
                        name="workinghoursTo"
                        margin="normal"
                        variant="standard"
                        color="primary"
                        placeholder="To"
                        value={this.state.workinghours}
                        onChange={this.onChange}
                        fullWidth
                    />
                    </label>
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Restaurant</Button>
            </form>
            <div className="errorMessage">{this.state.error}</div>
            </div>
            </div>   
            )
        }
    }

    export default AddNewRestaurant