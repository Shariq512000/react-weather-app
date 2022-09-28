import { useState, useEffect } from "react"
import axios from "axios";
import "./index.css";




function Weather() {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`https://api.weatherapi.com/v1/current.json?key=bc95a555c96041ed99970949220107&q=${cityName}`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

    return (
        <div className="main">

            <form onSubmit={submitHandler} className="fom">
                <div id="nm">City Name:</div>
                <input type="text" placeholder="enter your city name" required id="city"
                    onChange={(e) => { setCityName(e.target.value) }} />
                <br />
                <br />

                <button type="submit">get weather</button>
            </form>
            <br />
            <br />

            {(weatherData === null) ? null :
                <div>
                    <div id="cen"><img src={`https:${weatherData?.current?.condition.icon}`} className="logo" alt="icon" />
                        <br />
                        <div id="temp">{Math.round(weatherData?.current?.temp_c)}°C</div>
                    </div>
                    <br />
                    <div id="par"> {`(${weatherData.current.condition.text})`}</div>
                    <br />
                    <div id="second">
                        <div id="loco">location: {`${weatherData.location.name} , ${weatherData.location.region} , ${weatherData.location.country}`}</div>
                        <br />
                        <div id="fh">Fahrenheit: {weatherData.current.temp_f}°F</div>
                        <br />
                        <div id="fl">Feelslike: {weatherData.current.feelslike_c}°C</div>
                        <br />
                        <div id="hum">Humidity: {weatherData.current.humidity}%</div>
                        <br />
                        <div id="visi">Visibility: {weatherData.current.vis_km}km</div>
                        <br />
                        <div id="ws">Wind Speed: {weatherData.current.wind_kph}km/h</div>
                        

                    </div>
                </div>
            }
        </div>
    );
};

  export default Weather;
