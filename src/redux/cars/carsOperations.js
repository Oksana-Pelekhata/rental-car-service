import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "api/cars";

export const getAllCars = createAsyncThunk('cars/all', async (_, { rejectWithValue }) => {
try {
        return getCars()
    } catch (error) {
        return rejectWithValue(error)
    }
})