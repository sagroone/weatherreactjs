import React, { Component } from 'react';

import './_app.scss';

import SearchForm from '../search-form';
import WeatherNow from '../weather-now';
import Location from '../location';
import WeatherItemList from '../weather-item-list';

import firstLaunch from './first-launch.png';
import active from './active.png';
export default class App extends Component {

    currentWeather;
    forecastWeather;
    
    state = {
        units: 'metric',
        city: '',
        isActive: false,
        isValidate: true
    }

    showElem = ( city, units = 'metric' ) => {
        this.getForecastWeatherApi( city, units );
        this.getCurrentWeatherApi( city, units );
        this.setState({ 
            units: units,
            city: city
        });
    }

    getForecastWeatherApi = ( city, units ) => {  
        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${city}&cnt=7&units=${units}`, {
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

    getCurrentWeatherApi = ( city, units ) => {  
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${units}&mode=json&q=${city}`, {
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

        const hideCLass = this.state.isActive ? 'first-img hide' : 'first-img';

        console.log(this.forecastWeather);
        return (
            <div className="weather">
                <img alt="first launch img" className={hideCLass} src={firstLaunch}/>
                <img alt="second launch img" className="active-img" src={active}/>
                <div className="container">
                    <SearchForm state={ this.state } showElem={this.showElem}/>
                    {this.state.isActive ? <Location state={this.state} {...this.currentWeather} /> : null}
                    {this.state.isActive ? <WeatherNow state={this.state} showElem={this.showElem} {...this.currentWeather} /> : null}
                    {this.state.isActive ? <WeatherItemList state={this.state} {...this.forecastWeather} /> : null}
                </div>
            </div>
        );
    }
}
