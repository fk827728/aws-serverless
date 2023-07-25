import { RawWeatherData, WeatherData } from '../@types';
import axios from 'axios';
import 'dotenv/config';
import { convertData } from '../utils/convertData';

const FIELDS_REQUIRED_ERROR = 'city and countryCode is required.';
const API_KEY_ERROR = 'api key is not stored in env file or parameter store.';

export const getWeather = async (city: string, countryCode: string): Promise<unknown> => {
  // this is my code, this is my destiny\
  if (city === '' || countryCode === '') {
    throw new Error(FIELDS_REQUIRED_ERROR);
  }
  const apiKey = process.env.API_KEY;
  if (apiKey === '') {
    throw new Error(API_KEY_ERROR);
  }

  const baseUrl = process.env.BASE_URL;
  const url = `/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

  const response = await axios.get(baseUrl + url);
  const rawWeatherData : RawWeatherData = response.data;
  const data : WeatherData = convertData(rawWeatherData);

  return { data };
};
