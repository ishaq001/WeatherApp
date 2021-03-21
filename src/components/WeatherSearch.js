import React from 'react';

const WeatherSearch = (props) => {
    return (
        <div className="weather-search">
            <form onSubmit={props.api_call} className="weather-search__form">
                
                
            <input name="location" autoComplete="off" placeholder="Search" className="weather-search__input" type="text" />
            
            <div className="weather-search__submit">
                <button className="weather-search__button">&rarr;</button>
            </div>

            </form>
        </div>

    )
}

export default WeatherSearch;