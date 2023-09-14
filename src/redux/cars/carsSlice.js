const { createSlice } = require("@reduxjs/toolkit");
const { getAllCars } = require("./carsOperations");

const initialState = {
    cars: [],
    error: null,
}

const handlePending = (state) => {
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    console.log('eror', error.message)
    state.error = payload ?? error.message;
}

const handleFulfilledGetAllCars = (state, { payload }) => {
    console.log('payload', payload)
    state.cars = payload
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCars.fulfilled, handleFulfilledGetAllCars )
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const carsReducer = carsSlice.reducer