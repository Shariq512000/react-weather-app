import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useState } from "react";
import "./index.css";



function Weather() {
    const [WeatherData, setWeatherData] = useState({});
    const [CityName, setCityName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get('https://api.weatherapi.com/v1/current.json?key=bc95a555c96041ed99970949220107&q=' + CityName);
        .then(response => {
            // handle success
            setWeatherData(response.data);
            console.log("WeatherData", WeatherData);

        })
        .catch(err => {
              console.log("error", err);
        })


    }
    return ( <div>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter your city name" required />
            onChange={(e) => {
                setCityName(e.target.value)
            }}
            <button type="submit">Check Weather</button>
        </form>


    </div>)
}
