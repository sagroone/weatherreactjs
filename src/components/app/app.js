import React, { Component } from 'react';
import './_app.scss';

import SearchForm from '../search-form';
import WeatherNow from '../weather-now';
import Location from '../location';
import WeatherItemList from '../weather-item-list';
export default class App extends Component {

    currentWeather;
    forecastWeather;
    
    state = {
        units: 'metric',
        city: null,
        isActive: false,
        isValidate: true
    }

    submit = ( value ) => {

        this.setState({ name: value })
       
    }

    changeUnits = ( value ) => {
        this.setState({
            units: value
        })
    }

    getForecastWeatherApi = () => {  

        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${this.city}&cnt=7&units=${this.state.units}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "e09f1511e5mshdddd0499fd70955p1c78b3jsn3b1446a6f346",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.cod == '200') {
                this.forecastWeather = data;
            } 
        })
    }

    getCurrentWeatherApi = () => {  
        
            
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${this.state.units}&mode=json&q=${this.city}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "e09f1511e5mshdddd0499fd70955p1c78b3jsn3b1446a6f346",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.cod == '200') {
                document.querySelector('.weather').classList.add('active');
                this.currentWeather = data;
                this.setState({
                    isValidate: true,
                    isActive: true
                })
            } else if (data.cod == '404') {
                this.setState({
                    isValidate: false
                })
            }
        })
    }

    render() {
        return (
            <div className="weather">
                <SearchForm submit={this.submit}/>
                {this.state.isActive ? <Location state={this.state} {...this.currentWeather} /> : null}
                {this.state.isActive ? <WeatherNow state={this.state} changeUnits={this.changeUnits} {...this.currentWeather} /> : null}
                {this.state.isActive ? <WeatherItemList state={this.state} name={this.city.name} {...this.forecastWeather} /> : null}
            </div>
        );
    }
}
