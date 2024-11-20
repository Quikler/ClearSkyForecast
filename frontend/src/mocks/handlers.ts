import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
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
    })
  }),
]