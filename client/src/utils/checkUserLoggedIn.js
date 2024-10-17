// src/utils/authService.js
import axios from 'axios';
import { setUser, logoutUser, setLoading } from '../store/features/auth/AuthSlice';

export const checkAuth = async (dispatch) => {
  dispatch(setLoading(true)); // Set loading to true before making the request
  try {
    const response = await axios.get('http://localhost:3000/user/profile', {
      withCredentials: true,
    });

    dispatch(setUser({ user: response.data.user }));
  } catch (error) {
    dispatch(logoutUser());
  } finally {
    dispatch(setLoading(false)); // Set loading to false after the request completes
  }
};
