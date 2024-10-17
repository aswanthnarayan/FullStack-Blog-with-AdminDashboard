import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch profile data
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (userId, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: {},
        status: 'idle',
        error: null,
    },
    reducers: {
        updateProfile: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
