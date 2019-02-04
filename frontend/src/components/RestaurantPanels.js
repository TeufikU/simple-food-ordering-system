import React, { Component } from 'react';
import './App.css';

class RestaurantPanels extends Component {
    
    
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>Welcome to React</h2>
            </div>
            <div className="App-intro">
                <br />
                <button onClick={ this.toggleDiv }>Toggle div</button>
                <br /><br />
                { this.state.show && <Box /> }
            </div>
          </div>
        );
    }
}



export default RestaurantPanels;