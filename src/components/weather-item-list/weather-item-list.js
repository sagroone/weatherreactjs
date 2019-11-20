import React from 'react';
import WeatherItem from '../weather-item';

import './_weather-item-list.scss';

const WeatherItemList = ( props ) => {

    const forecastArr = props.list !== undefined ? props.list : [];
    const className = props.state.isActive ? 'weather-item-list show' : 'weather-item-list';
    return(
        <div className={className}>
          {forecastArr.map(( number ) => 
          <WeatherItem state={props.state} {...number} key={number.deg}/>)}
        </div>
    );
}

export default WeatherItemList