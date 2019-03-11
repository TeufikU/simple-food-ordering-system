import React from 'react'

    /*
        This component stands for error that we're retrieving from our database
    */
 const GlobalMessage = (props) =>(
    
      <div className="errorMessage" hidden={!props.error}>
        {props.error}
      </div>
    
  )

 export default GlobalMessage