import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    temperatureC: ''
}

export const currentParametrSlice = createSlice({
    name: 'currentParametr',
    initialState,
    reducers: {
        setTemperature: (state, action) => {
            state.currentParametr.temperatureC = action.payload
        }
    }
})

export const { setTemperature } = currentParametrSlice.actions

export default currentParametrSlice.reducer