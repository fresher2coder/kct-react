import React, { useEffect, useState } from "react";
import axios from "axios";

const city = "Chennai";
const key = "5743aa3b69150b05795f2cb862de6742";

function WeatherAPI() {
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: key,
            units: "metric",
          },
        }
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
    return () => {
      setWeather(null);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <h1 className="main-title">Weather App</h1>
        {weather && (
          <div className="weather-card">
            <h2>{weather.name}</h2>
            <h3>{weather.weather[0].main}</h3>
            <p>Temp: {weather.main.temp}</p>
            <p>Wind Spead: {weather.wind.speed}</p>
            <p>Humidity: {weather.main.humidity}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherAPI;
