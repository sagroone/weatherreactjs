import React, { Component } from 'react'
import './_weather-now.scss'

export default class WeatherNow extends Component {

    addPlus = ( num ) => {
        return num <= 9 ? `0` + num : num;
    }

    render() {

        return(
            <div className="weather-now">
                <div className="weather-now-ico">
                    <object alt="weather ico" type="image/svg+xml" data="">weather</object>
                </div>

                <div className="weather-now__info">
                    <div className="whole-day">
                        <div className="whole-day__min"><span className="cel">{}</span></div>
                        <div className="whole-day__max"><span className="cel">{}</span></div>
                    </div>
                    <div className="current-deg">
                        <span className="current-deg__num"></span>
                        <span data-units="metric" className=""></span>
                        <span data-units="imperial" className=""></span>
                    </div>
                    <div className="weather-conditions"></div>
                </div>
            </div>
        )
    }
}
