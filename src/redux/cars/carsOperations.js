import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToFavorites, getCars, removeFromFavorites } from "api/cars";

export const getAllCars = createAsyncThunk('cars/all', async (_, { rejectWithValue }) => {
try {
        return getCars()
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const addToFavoritesThunk = createAsyncThunk('cars/favorites', (car, { rejectWithValue }) => {
    try {
        return addToFavorites(car)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteFromFavoritesThunk = createAsyncThunk('cars/deleteFromFavorites',
    (id, { rejectWithValue }) => {
        try {
            console.log('id', id)
            return removeFromFavorites(id)
        } catch (error) {
            return rejectWithValue(error)
        }
    
})