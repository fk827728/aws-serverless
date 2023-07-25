import { RawWeatherData, WeatherData } from "../@types";

export function convertData(rawWeatherData: RawWeatherData) : WeatherData{
  return {
    lon: rawWeatherData.coord.lon,
    lat: rawWeatherData.coord.lat,
    main: rawWeatherData.weather[0].main,
    description: rawWeatherData.weather[0].description,
    temp: rawWeatherData.main.temp,
    feels_like: rawWeatherData.main.feels_like,
    temp_min: rawWeatherData.main.temp_min,
    temp_max: rawWeatherData.main.temp_max,
    pressure: rawWeatherData.main.pressure,
    humidity: rawWeatherData.main.humidity
  };
}
