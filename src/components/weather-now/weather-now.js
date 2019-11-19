import React from 'react'

import './_weather-now.scss';
const WeatherNow = ( props ) => {
    
    const addPlus = ( num ) => {
        return ( num > 0 ) ? '+' + num : num;
    }

    const className = props.state.isActive ? 'weather-now show' : 'weather-now ';
    const {main : { temp, temp_max, temp_min }} = props

    // const icon = './icon/' + props.weather[0].icon + '.svg';

    const cel = (props.state.units === 'metric') ? 'current-deg__units active' : 'current-deg__units'
    const far = (props.state.units === 'imperial') ? 'current-deg__units active' : 'current-deg__units'
    return(
        <div className={className}>
            <div className="weather-now-ico">
                Ico
            </div>
            <div className="weather-now__info">
                <div className="whole-day">
                    <div className="whole-day__min">Min {addPlus(Math.floor(temp_min))}<span className="cel">C</span></div>
                    <div className="whole-day__max">Max {addPlus(Math.floor(temp_max))}<span className="cel">C</span></div>
                </div>
                <div className="current-deg">
                    <span className="current-deg__num">{addPlus(Math.floor(temp))}</span>
                    <span onClick={() => {props.changeUnits('metric')}} className={cel}>C</span>
                    <span onClick={() => {props.changeUnits('imperial')}} className={far}>F</span>
                </div>
                <div className="weather-conditions">{props.weather[0].description}</div>
            </div>
        </div>
    )
}

export default WeatherNow;
