import React, { Component } from 'react';

import './_search-form.scss';
import logo from './search-ico.svg';

import WeatherNow from '../weather-now';

export default class SearchForm extends Component {
 
    city = React.createRef();
    state = {
        currentWeather: [],
        forecastWeather: [],
        units: 'metric',
        isValidate: true,
        isActivate: false,
        isLoaded: false
    }

    submit = ( event ) => {
        let weatherNow;
        if ( event.key === 'Enter' ) {
            this.city = event.target.value;
            this.getCurrentWeatherApi();
            weatherNow = <weatheNow/>;
        } 
         
    }

    getCurrentWeatherApi = () => {    

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${this.state.units}&mode=json&q=${this.city}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "e09f1511e5mshdddd0499fd70955p1c78b3jsn3b1446a6f346",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.cod == '200') {
                document.querySelector('.weather').classList.add('active');
                this.setState({
                    isValidate: true,
                    isActivate: true
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
            <form method="#" action='#' className="search-form">
                <img alt="search ico" className="search-form__ico" src={logo} />
                <input type="text"  ref="this.city" className={classNames} onKeyPress={this.submit} placeholder="Enter your city" />
            </form>
        );
    }
}
