import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '../api/apiWeather'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware)
})

setupListeners(store.dispatch)
