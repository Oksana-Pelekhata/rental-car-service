const { createSlice } = require("@reduxjs/toolkit");
const { getAllCars } = require("./carsOperations");

const initialState = {
    allCars: [],
    favorites: []
}

const handlePending = (state) => {
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    state.error = payload ?? error.message;
}

const handleFulfilledGetAllCars = (state, { payload }) => {
    state.allCars = payload;
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCars.fulfilled, handleFulfilledGetAllCars)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }, 
    reducers: {
        addToFavorites: (state, { payload }) => {
            state.favorites.push(payload)
        },
        removeFromFavorites:  (state, { payload }) => {
            const index = state.favorites.findIndex(el => el.id === payload.id);
            state.favorites.splice(index, 1);
}
    }
})

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer