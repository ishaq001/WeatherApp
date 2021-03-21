import React, { useState } from 'react';
import Axios from 'axios';
import Header from './Header.js';
import Content from './Content.js';
import WeatherData from './WeatherData.js';

const Main = () => {

    const [weather, setWeather] = useState();

    const api_call = async (e) => {
        //preventing the page from refreshing
        e.preventDefault();

        const location = e.target.elements.location.value;

        const API_KEY = "acd30aebbb5ddba96925152e1c42daea";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

        const request = Axios.get(url);
        const response = await request;

        setWeather(response);
    }

    console.log(weather);

    return (
        <div className="main">
            {/* Header contains the search input now */}
            <Header  api_call={api_call} />
            <Content>
                { weather && <WeatherData weather={weather}/>}
            </Content>
        </div>
    )
}

export default Main;