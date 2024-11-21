import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://geolocation-db.com/jsonp?callback=callback', () => {
    const jsonData = JSON.stringify({
      "country_code": "UA",
      "country_name": "Ukraine",
      "city": "Dnipro",
      "postal": "49089",
      "latitude": 48.4593,
      "longitude": 35.0386,
      "IPv4": "188.163.40.221",
      "state": "Dnipropetrovsk"
    });
  
    // Creating JSONP-response
    const jsonpResponse = `callback(${jsonData})`;
  
    return HttpResponse.text(jsonpResponse, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript",
      },
    });
  }),

  http.get('https://localhost:7115/api/weather/today', () => {
    return HttpResponse.json({
      "topBar": {
        "latitude": 48.4593,
        "longitude": 35.0386,
        "city": "Dnipro",
        "region": "Dnipropetrovsk",
        "country": "Ukraine"
      },
      "shortWheather": {
        "city": "Dnipro",
        "region": "Dnipropetrovsk",
        "currentTime": "2024-11-21 18:53",
        "currentTemp": 3,
        "cloudState": "light rain",
        "maxTemp": 9,
        "minTemp": 1,
        "icon": "10n"
      },
      "todayForecast": [
        {
          "timeOfDay": "Evening",
          "temp": 4,
          "icon": "13n",
          "precipitation": 100,
          "isCurrent": true,
          "startTime": "2024-11-21 18:00",
          "endTime": "2024-11-21 21:00"
        },
        {
          "timeOfDay": "Night",
          "temp": 2,
          "icon": "04n",
          "precipitation": 0,
          "isCurrent": false,
          "startTime": "2024-11-22 00:00",
          "endTime": "2024-11-22 03:00"
        }
      ],
      "detailedWeather": {
        "feelsLike": -1,
        "sunrise": "06:57",
        "sunset": "15:54",
        "maxTemp": 9,
        "minTemp": 1,
        "humidity": 88,
        "pressure": 1000,
        "visibility": "7186",
        "wind": 7.5,
        "city": "Dnipro",
        "country": "Ukraine"
      }
    });
  }),

  http.get('https://localhost:7115/api/weather/hourly', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      "Wednesday, November 20": [
        {
          time: '21:00',
          temp: 12,
          icon: '04n',
          precipitation: 0,
          feelsLike: 11,
          wind: 8,
          humidity: 83,
          clouds: 99,
          visibility: 10000,
          pressure: 1001,
        }
      ],
      "Thursday, November 21": [
        {
          time: '00:00',
          temp: 12,
          icon: '04n',
          precipitation: 0,
          feelsLike: 11,
          wind: 8,
          humidity: 84,
          clouds: 99,
          visibility: 10000,
          pressure: 1000,
        },
        {
          time: '03:00',
          temp: 13,
          icon: '04n',
          precipitation: 0,
          feelsLike: 12,
          wind: 10,
          humidity: 75,
          clouds: 100,
          visibility: 10000,
          pressure: 998,
        },
        {
          time: '06:00',
          temp: 14,
          icon: '10d',
          precipitation: 20,
          feelsLike: 14,
          wind: 12,
          humidity: 64,
          clouds: 100,
          visibility: 10000,
          pressure: 994,
        },
      ],
    });
  }),
]