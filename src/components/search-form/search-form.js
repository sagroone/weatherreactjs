import React, { Component } from 'react';

import './_search-form.scss';
import logo from './search-ico.svg';

export default class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.city = React.createRef();
        this.state = {
            units: 'metric',
            isValidate: true,
            isLoaded: false,
            forecastItems: []
        }
    }

    render() {
        const errorForm = (this.state.isValidate) ? 'search-form__input ' : 'search-form__input errorForm';

        return (
            <form method="#" action='#' className="search-form">
                <img alt="search ico" className="search-form__ico" src={logo} />
                <input type="text"  ref="this.city" className={errorForm} onKeyPress={this.submit} placeholder="Enter your city" />
            </form>
        );
    }

    submit = ( event ) => {
        if ( event.key === 'Enter' ) {

            this.city = event.target.value;
            this.getCurrentWeatherApi();
        } 
    }

    getCurrentWeatherApi = () => {
        const that = this;
        this.connectToCors(); 

        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState.forecastItems = JSON.parse(this.responseText);
                console.log(that.setState.forecastItems)
            }

            console.log(that.setState.forecastItems)
        });

        xhr.open("GET", `https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393&extra=true`);
        xhr.setRequestHeader("X-Yandex-API-Key", "dcf8c9b6-bb53-4b58-b410-85391a6c171f");
        
        xhr.send(null);
    }

    connectToCors = () => {
        (function() {
            var cors_api_host = 'cors-anywhere.herokuapp.com';
            var cors_api_url = 'https://' + cors_api_host + '/';
            var slice = [].slice;
            var origin = window.location.protocol + '//' + window.location.host;
            var open = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function() {
                var args = slice.call(arguments);
                var targetOrigin = /^https?:\/\/([^/]+)/i.exec(args[1]);
                if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
                    targetOrigin[1] !== cors_api_host) {
                    args[1] = cors_api_url + args[1];
                }
                return open.apply(this, args);
            };
        })();
    }
}
