interface Coord {
    "lon": number,
    "lat": number
}

interface Weather {
    "id": number,
    "main": string,
    "description": string,
    "icon": string
}

interface Main {
  "temp": number,
  "feels_like": number,
  "pressure": number,
  "humidity": number,
  "temp_min": number,
  "temp_max": number
}

interface Wind {
  "speed": number,
  "deg": number
}

interface Clouds {
  "all": number
}

interface Sys {
  "type": number,
  "id": number,
  "country": string,
  "sunrise": number,
  "sunset": number
}

export interface WeatherData {
  "lon": number,
  "lat": number,
  "main": string,
  "description": string,
  "temp": number,
  "feels_like": number,
  "temp_min": number,
  "temp_max": number,
  "pressure": number,
  "humidity": number
}

export interface RawWeatherData {
  "coord": Coord,
  "weather": Weather[],
  "base": string,
  "main": Main,
  "visibility": number,
  "wind": Wind,
  "clouds": Clouds,
  "dt": number,
  "sys": Sys,
  "id": number,
  "name": string,
  "cod": number
}
