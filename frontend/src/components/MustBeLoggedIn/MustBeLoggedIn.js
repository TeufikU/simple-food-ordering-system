import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './MustBeLoggedIn.css'

  /**
    This component is for letting users know that they're not logged in and to do so
  */
 const MustBeLoggedIn = () =>(
    <div className="globalMessage">
    <h1>You must be logged in to view this page!</h1> 
    <p>Go to login page</p>
    <Link to="/login"><Button variant="contained" color="primary" className="MustBeLoggedInButton">Login</Button></Link>
    </div>
  )

 export default MustBeLoggedIn