import React, { useState, useEffect } from "react";
import axios from "axios";
import "./map.scss";

function Map({ location, setTemperature }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=d4b48403c1c642a59cf165123231412&q=${location}&aqi=yes`
        );
        setWeatherData(response.data);
        setTemperature(response.data.current.temp_c);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div className="map">
      {weatherData && (
        <>
          <div className="header">
            <h2 className="temperature">{weatherData.current.temp_c}°C</h2>
            <div className="feelslike">
              <p>{weatherData.current.condition.text}</p>
              <p>
                <i> Feels Like: </i>
                {weatherData.current.feelslike_c}°C
              </p>
            </div>
            <div className="time">
              <h2>
                {weatherData.location.name}, {weatherData.location.country}
              </h2>
              <p>Local Time: {weatherData.location.localtime}</p>
            </div>
          </div>
          <div className="details1">
            <p>
              <b> Wind: </b>
              {weatherData.current.wind_kph} kph {weatherData.current.wind_dir}
            </p>
            <p>
              <b>Pressure: </b>
              {weatherData.current.pressure_mb} mb
            </p>
            <p>
              <b>Humidity: </b>
              {weatherData.current.humidity}%
            </p>
            <p>
              <b>Precipitation: </b>
              {weatherData.current.precip_mm} mm
            </p>
          </div>
          <div className="details2">
            <p>
              <b>Cloud Cover: </b>
              {weatherData.current.cloud}%
            </p>
            <p>
              <b>Visibility: </b>
              {weatherData.current.vis_km} km
            </p>
          </div>
          <div className="send">
            <button>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Map;
