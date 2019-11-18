import React, { Component } from 'react'
import './_weather-now.scss';

export default class WeatherNow extends Component {

    state = {
        isActive: false,
    }

    timeout = () => {
        setTimeout(() => {
            this.setState({
                isActive: !this.isActive
            })
        },250)
    }

    addPlus = ( num ) => {
        return ( num > 0 ) ? '+' + num : num;
    }

    render() {
        const className = this.state.isActive ? 'weather-now show' : 'weather-now ';
        const {main : { temp, temp_max, temp_min }} = this.props

        const icon = './icon/' + this.props.weather[0].icon + '.svg';

        const cel = (this.state.units == 'metric') ? 'current-deg__units active' : 'current-deg__units'
        const far = (this.state.units == 'imperial') ? 'current-deg__units active' : 'current-deg__units'
        return(
            <div className={className}>
                {!this.state.isActive ? this.timeout() : null}
                <div className="weather-now-ico">
                    
                </div>

                <div className="weather-now__info">
                    <div className="whole-day">
                        <div className="whole-day__min">Min {this.addPlus(Math.floor(temp_min))}<span className="cel">C</span></div>
                        <div className="whole-day__max">Max {this.addPlus(Math.floor(temp_max))}<span className="cel">C</span></div>
                    </div>
                    <div className="current-deg">
                        <span className="current-deg__num">{this.addPlus(Math.floor(temp))}</span>
                        <span data-units="metric" onClick={() => {this.props.changeUnits(this.state.name)}} className={cel}>C</span>
                        <span data-units="imperial" onClick={() => {this.props.changeUnits(this.state.name)}} className={far}>F</span>
                    </div>
                    <div className="weather-conditions"></div>
                </div>
            </div>
        )
    }
}
