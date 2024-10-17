
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,   // Keep the user data in Redux
  isAuthenticated: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
  },
});

export const { setUser, logoutUser,setLoading } = authSlice.actions;

export default authSlice.reducer;
