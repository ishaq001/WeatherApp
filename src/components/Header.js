import React from 'react';
import WeatherSearch from './WeatherSearch';

const Header = ({api_call, weather}) => 
{
    return (
        <div className="header">
           <WeatherSearch api_call={api_call} weather={weather} />
        </div>
    )
}

export default Header;