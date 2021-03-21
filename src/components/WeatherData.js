import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faWind } from '@fortawesome/free-solid-svg-icons'

const WeatherData = (props) => {

    const {temp, humidity} = props.weather.data.main;
    const {name, sys, wind} = props.weather.data;

    return (
        <div className="weather-data">
            <p className="weather-data__tagline">
               <p>{name}</p> 
                <p className="__sys-country">{sys.country}</p>
            </p>

            <div className="weather-data__box">
                <span className="weather-data__property weather-temp">
                <h1 className="weather-data__temp">{temp.toFixed(0)} <span className="__degree">°C</span></h1>
                </span>

                <span className="weather-data__property">
                <p className="weather-data__title"><span className="__icon"><FontAwesomeIcon icon={faTint}/></span> Humidity</p>
                <p className="weather-data__value">{humidity}</p>
                </span>

                <span className="weather-data__property">
                <p className="weather-data__title"><span className="__icon"><FontAwesomeIcon icon={faWind}/></span> Wind</p>
                <p className="weather-data__value">{wind.deg}</p>
                </span>
            </div>

        </div>
    )
}

export default WeatherData;