import { RawWeatherData, WeatherData } from "../@types";
import { getWeather } from "../services";
import { convertData } from "../utils/convertData";

describe('Weather API', () => {
    it('this is my ultimate test', () => {
        expect(true).toBe(true);
    })
})

describe('Weather', () => {
  const mockRawWeatherData = jest.fn(() => {
    return {
      "coord": {
          "lon": 138.6,
          "lat": -34.9333
      },
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 286.08,
          "feels_like": 285.49,
          "temp_min": 284.85,
          "temp_max": 287.2,
          "pressure": 1014,
          "humidity": 79
      },
      "visibility": 10000,
      "wind": {
          "speed": 0.89,
          "deg": 245,
          "gust": 3.13
      },
      "clouds": {
          "all": 75
      },
      "dt": 1680119908,
      "sys": {
          "type": 2,
          "id": 2001763,
          "country": "AU",
          "sunrise": 1680123354,
          "sunset": 1680165867
      },
      "timezone": 37800,
      "id": 2078025,
      "name": "Adelaide",
      "cod": 200
    };
  });

  const mockWeatherData = jest.fn(() => {
      return {
        "lon": 138.6,
        "lat": -34.9333,
        "main": "Clouds",
        "description": "broken clouds",
        "temp": 286.08,
        "feels_like": 285.49,
        "temp_min": 284.85,
        "temp_max": 287.2,
        "pressure": 1014,
        "humidity": 79
      };
  });

  it('should check mock object', () => {
      const weather : WeatherData = mockWeatherData();
      expect(weather).toBeDefined();

  });

  it('should check properties', () => {
      const weather : WeatherData = mockWeatherData();
      expect(weather.main).toEqual('Clouds');
  });


  it('convert data function', () => {
      const rawWeather : RawWeatherData = mockRawWeatherData();
      const weather : WeatherData = mockWeatherData();
      expect(convertData(rawWeather)).toEqual(weather);
  });

  it('get weather function', async () => {
    const expectedData = {
      "lon": expect.any(Number),
      "lat": expect.any(Number),
      "main": expect.any(String),
      "description": expect.any(String),
      "temp": expect.any(Number),
      "feels_like": expect.any(Number),
      "temp_min": expect.any(Number),
      "temp_max": expect.any(Number),
      "pressure": expect.any(Number),
      "humidity": expect.any(Number)
    };

    const { data: weather } = await getWeather('Adelaide', 'au');
    expect(weather).toEqual(expect.objectContaining(expectedData));
  });
});
