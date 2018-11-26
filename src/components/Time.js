import React, { Component } from 'react';

class time extends Component {
    render() {
        return (
            <div>
            <button className="manila" onClick={this.props.getTime}>Manila</button>
            <p className="date">{new Date().toDateString()}</p>
            <p className="clock">{new Date().toLocaleTimeString()}</p>
           
            </div>
        )
        
    }
}



export default time;
