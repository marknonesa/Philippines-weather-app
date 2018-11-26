import React, { Component } from 'react'
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';
import Time from './components/Time';
import Manila from './components/Manila';
const API_KEY = '2de551b2d566e1cb0da6890b53274261';
const WKEY = '8VI8YC016WM0';


class App extends Component{
  state = {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
 
   
  }
  
  initialWeather = async (e) => {
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manila,$Philippines&mode=json&appid=${API_KEY}&units=metric`);
  const info = await api_call.json();
  console.log(info);
  this.setState ({
      temperature1: info.main.temp,
      city1: info.name.toUpperCase(),
      country1: info.sys.country.toUpperCase(),
      humidity1: info.main.humidity,
      description1: info.weather[0].description.toUpperCase(),

  });
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country){
      console.log(data);
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""          
    }); 

    }


   else {
    this.setState({
      temperature: undefined,
      city: undefined ,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: `Invalid input`       
    
  });
}
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  
 
   getTime = async (e)  => {
    e.preventDefault();
    const time_call = await fetch (`http://api.timezonedb.com/v2/get-time-zone?key=${WKEY}&format=json&by=zone&zone=Asia/Manila`);
    const info1 = await time_call.json();
    console.log(info1);
    this.setState({time: info1.formatted, country: info1.countryName});
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                  <Time getTime={this.getTime}
                  initialWeather={this.initialWeather}/>
                  </div>
                    <div>
                    <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}/>
                      

                      <Manila   initialWeather={this.initialWeather}
                      cancelCourse ={this.cancelCourse}
                      temperature1={this.state.temperature1}
                      city1={this.state.city1}
                      country1={this.state.country1}
                      humidity1={this.state.humidity1}
                      description1={this.state.description1}
                      />
                      
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      
    );
  }
};



       

export default App;