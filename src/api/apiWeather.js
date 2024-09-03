import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
  'X-RapidAPI-Key': 'f0419a66bamshd259b28f195ae89p137e3djsn35bd43d32b6b',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://weatherapi-com.p.rapidapi.com/' }),
    endpoints: (builder) => ({

        getForecastWeatherData: builder.query({
          query: ({lat, long}) => ({
            url: 'forecast.json?',
            params: {
              q: `${lat},${long}`,
              days: '3'
            },
            headers: headers
          })
        }),

        getCitys: builder.query({
          query: (cityName) => ({
            url: 'search.json?',
            params: {
              q: `${cityName}`
            },
            headers: headers
          })
        }), 
    })
})    

export const { useGetForecastWeatherDataQuery, useGetCitysQuery } = weatherApi