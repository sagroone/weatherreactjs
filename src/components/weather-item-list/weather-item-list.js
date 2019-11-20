import React from 'react';
import WeatherItem from '../weather-item';

import './_weather-item-list.scss';

const WeatherItemList = ( props ) => {
    const forecastArr = props.list;
    const className = props.state.isActive ? 'weather-item-list show' : 'weather-item-list';
    return(
        <div className={className}>
           {forecastArr.map(( number ) => <WeatherItem {...number} />)}
        </div>
    );
}

export default WeatherItemList