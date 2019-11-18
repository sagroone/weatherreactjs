import React, { Component } from 'react';

import './_search-form.scss';
import logo from './search-ico.svg';

import WeatherNow from '../weather-now';
import Location from '../location';
import WeatherItemList from '../weather-item-list';
export default class SearchForm extends Component {
 
    city = React.createRef();
    currentWeather;
    forecastWeather
    state = {
        units: 'metric',
        isValidate: true,
        isActive: false,
        isLoaded: false
    }

    submit = ( event ) => {

        if ( event.key === 'Enter' ) {
            this.city = event.target.value;
            this.getForecastWeatherApi();
            this.getCurrentWeatherApi(); 
        } 
       
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
        const classNames = (this.state.isValidate) ? 'search-form__input ' : 'search-form__input error';
        
        return (
            
            <div className="weather">
                <div className="container">
                    <div className="search-form">
                        <img alt="search ico" className="search-form__ico" src={logo} />
                        <input type="text"  ref="this.city" className={classNames} onKeyPress={this.submit} placeholder="Enter your city" />
                    </div>
                    {this.state.isActive ? <Location {...this.currentWeather} /> : null}
                    {this.state.isActive ? <WeatherNow state={this.state} changeUnits={this.changeUnits} {...this.currentWeather} /> : null}
                    {this.state.isActive ? <WeatherItemList name={this.city} {...this.forecastWeather.list} /> : null}
                </div>
            </div>
        );
    }
}
