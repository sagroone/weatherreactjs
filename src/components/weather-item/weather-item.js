import React, { Component } from 'react'

import './_weather-item.scss'

const weeksList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const monthsList = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
];
export default class WeatherItem extends Component {

    render() {
       console.log(this.props)
        
        return (
            <div className="weather-item">
                <div className="weather-item__ico">
                    <object type="">ico</object>
                </div>
                <div className="weather-item__min-max"> <span className="cel"></span></div>
                <div className="weather-item__day"></div>
            </div>

        );
    }
}

