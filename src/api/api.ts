import { handler as getWeather } from '../handlers/weather';

export const myhandler = async (event) => {
  return getWeather({
    city: event.queryStringParameters.city,
    countryCode: event.queryStringParameters.countryCode,
  });
};

export const handler = myhandler;
