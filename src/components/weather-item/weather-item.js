import React from 'react'

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

 const WeatherItem = ( props ) => {
    const addPlus = ( num ) => {
        return ( num > 0 ) ? '+' + num : num;
    }

    const {dt, deg, temp : { min, max }} = props;
    const currentDate = new Date()
    const date = new Date(dt * 1000);
    const weeksDay = date.getDay();
    const monthsNum = date.getDate();
    const months = date.getMonth();
    const year = date.getFullYear();

    const DateInfo = () => {
        return (
            <div>
                <p>{weeksList[weeksDay]}</p>
                <p>{monthsNum} {monthsList[months]} {year}</p>
            </div>
        )
    }
    const todayClass = currentDate.getDate() === date.getDate() ? 'weather-item today' : 'weather-item';
    const todayText =  currentDate.getDate() === date.getDate() ? 'Today' : <DateInfo/>;
    const iconClass = 'icon-' + props.weather[0].icon;

    return (
        <div key={ deg } className={ todayClass }>
            <div className="weather-item__ico">
                <i className={iconClass}></i>
            </div>
            <div className="weather-item__min-max"> {addPlus(Math.floor(min))}  {addPlus(Math.floor(max))} <span className="cel">C</span></div>
            <div className="weather-item__day">
                {todayText}
            </div>
        </div>
    );
}

export default WeatherItem;