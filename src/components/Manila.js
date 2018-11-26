import React from 'react';

const manilaweather = props => (

    <form id="weather-name" onSubmit = {props.initialWeather}>
    
   
    
    <div className="weather__info">
              {
                props.city1 && props.country1 && <p className="weather__key"> Location:
                <span> {props.city1}, {props.country1} </span>  
                </p>
              }
              {
                props.temperature1 && <p className="weather__key"> Temperature:  
                <span> {props.temperature1} </span>
                </p>
              }
              {
                props.humidity1 && <p className="weather__key"> Humidity: 
                <span> {props.humidity1} </span> 
                </p>
              }
              {
                props.description1 && <p className="weather__key"> Conditions:
                <span> {props.description1} </span> 
                </p>
              }
             
            </div>
            </form>
)
             

export default manilaweather;
