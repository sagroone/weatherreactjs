import React from 'react'

import './_weather-now.scss';

const WeatherNow = ( props ) => {

    const returnUnits = ( value ) => {
        props.showElem( props.name, value );
    }

    const addPlus = ( num ) => {
        return ( num > 0 ) ? '+' + num : num;
    }

    const className = props.state.isActive ? 'weather-now show' : 'weather-now ';
    const {main : { temp, temp_max, temp_min }} = props

    
 
    const cel = (props.state.units === 'metric') ? 'current-deg__units active' : 'current-deg__units'
    const far = (props.state.units === 'imperial') ? 'current-deg__units active' : 'current-deg__units'
    const unitsLetter = props.state.units == 'metric' ? 'C' : 'F';
    const iconClass = 'icon-' + props.weather[0].icon;
    
    return(
        <div className={className}>
            <div className="weather-now-ico">
                <i className={iconClass}></i>
            </div>
            <div className="weather-now__info">
                <div className="whole-day">
                    <div className="whole-day__min">Min {addPlus(Math.floor(temp_min))}<span className="cel">{unitsLetter}</span></div>
                    <div className="whole-day__max">Max {addPlus(Math.floor(temp_max))}<span className="cel">{unitsLetter}</span></div>
                </div>
                <div className="current-deg">
                    <span className="current-deg__num">{addPlus(Math.floor(temp))}</span>
                    <span onClick={() => {returnUnits('metric')}} className={cel}>C</span>
                    <span onClick={() => {returnUnits('imperial')}} className={far}>F</span>
                </div>
                <div className="weather-conditions">{props.weather[0].description}</div>
            </div>
        </div>
    )
}

export default WeatherNow;
