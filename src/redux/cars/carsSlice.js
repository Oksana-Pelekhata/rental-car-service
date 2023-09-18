const { createSlice } = require("@reduxjs/toolkit");
const { getAllCars, addToFavoritesThunk, deleteFromFavoritesThunk } = require("./carsOperations");

const initialState = {
    allCars: [],
    favorites: [{ id:9587,
year:2006,
make:"HUMMER",
model:"H2",
type:"SUV",
img:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp",
description:"The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
fuelConsumption:"19.8",
engineSize:"6.0L V8",
rentalPrice:"$55",
rentalCompany:"Adventure Car Rentals",
address:"321 Example Road, Kharkiv, Ukraine",
rentalConditions:"Minimum age: 25 Valid driver's license Security deposit required",
mileage:4771}]
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
const handleAddToFavoritesFulfilled = (state, { payload }) => {
    state.favorites = [payload, ...state.favorites];
   
}

const handleRemoveFromFavoritesFulfilled = (state, { payload }) => {
    console.log('payload', payload)
    state.favorites = state.favorites.filter(el => el.id !== payload.id);;
    state.error = '';
}
const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCars.fulfilled, handleFulfilledGetAllCars)
            // .addCase(addToFavoritesThunk.fulfilled, handleAddToFavoritesFulfilled)
            // .addCase(deleteFromFavoritesThunk.fulfilled, handleRemoveFromFavoritesFulfilled)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }, 
    reducers: {
        addToFavorites: (state, { payload }) => {
            console.log('payload - add to fav', payload)
            // state.favorites = [payload, ...state.favorites];
            state.favorites.push(payload)
            console.log('state.favorites - add to fav', state.favorites)
        },
        removeFromFavorites:  (state, { payload }) => {
            // state.favorites = state.favorites.filter(el => el.id !== payload.id);
            const index = state.favorites.findIndex(el => el.id === payload.id);
      state.favorites.splice(index, 1);
}
    }
})

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer