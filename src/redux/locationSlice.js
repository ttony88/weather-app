import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    location: {
        cityName: ''
    },
    currentParametr: {
        temperatureC: ''
    }
}

export const locationSlice = createSlice({
    name: 'cityNavigation',
    initialState,
    reducers: {
        citySearch: (state, action) => {
            state.location.cityName = action.payload
        },
        addTemperature: (state, action) => {
            state.currentParametr.temperatureC = action.payload
        }
        
    }
})

export const { citySearch, addTemperature } = locationSlice.actions

export default locationSlice.reducer