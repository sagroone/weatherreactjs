import React from 'react';

import './_location.scss'

const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weeksList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const Location = ( props ) => {

    const addZero = (num) => {
        return num < 10 ? '0' + num : num
    }

    const { getName } = require('country-list');

    const { name, sys: {country}, dt, timezone } = props;
    const date = new Date((dt + timezone) * 1000 ) ;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate()
    const weekDay = date.getDay();
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();

    const className = props.state.isActive ? 'location show' : 'location ';
    
    return (
        
        <div className={className}>
            
            <div className="geoposition">
                <p className="geoposition__city">{name},</p>
                <p className="geoposition__country">{getName(country)}</p>
            </div>
            <div className="date">
                <span className="date__time">{addZero(hours)}:{addZero(minutes)}</span>
                <span className="date__weeks-day">{weeksList[weekDay]}, </span>
                <span className="date__num-day">{day} </span>
                <span className="date__month">{monthsList[month]} </span>
                <span className="date__year">{year}</span>
            </div>
        </div>
    );
}

export default Location;

