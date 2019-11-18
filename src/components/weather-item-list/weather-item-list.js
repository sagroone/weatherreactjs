import React, { Component } from 'react';
import WeatherItem from '../weather-item';

import './_weather-item-list.scss';

export default class WeatherItemList extends Component {

    render() {

        return(
            <div className="weather-item-list">

                <WeatherItem {...this.props}/>
            </div>
        );
    }
}

