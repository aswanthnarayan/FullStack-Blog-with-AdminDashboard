import React, { useState } from 'react';
import { Typography, Card, Button } from '@material-tailwind/react';
import { InputCustom } from './CustomInput';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/features/auth/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import { checkAuth } from '../../utils/checkUserLoggedIn';

const SigninComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();  
  const navigate = useNavigate();  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: '', 
  }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
    }
    if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs before making API call
    if (!validateForm()) return;
  
    try {
      // Post request to the backend for sign-in
      const response = await axios.post('http://localhost:3000/user/signin', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      dispatch(setUser({ user: response.data.user }));
      checkAuth(dispatch)
      navigate('/user/home');
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data?.error || 'Invalid email or password';          
        // Handling different types of 400 errors based on the error message
        if (errorMessage.includes('User does not exist')) {
          setErrors({ email: 'User not found. Please check your email.' });
        } else if (errorMessage.includes('Name cannot be empty')) {
          setErrors({ password: 'Incorrect password. Please try again.' });
        } else {
          // General error for other 400 errors
          setErrors({ general: errorMessage });
        }
      } else {
        // Handle errors not related to response (e.g., network issues)
        console.error('Error during sign-in:', error.message);
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
    }
  };
  
  return (
    <div className="flex h-auth-h">
      <div className="flex justify-center items-center w-full md:w-1/2 p-2 md:p-4">
        <Card className="w-full max-w-md p-3 shadow-2xl py-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Typography variant="h3" className="text-3xl text-center mb-6">SIGN IN</Typography>

            {/* Email Input */}
            <InputCustom 
              type="email" 
              placeholder="Enter Your Email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange} 
            />
            {errors.email && <p className="text-red-500 text-xs pl-1">{errors.email}</p>}
            
            {/* Password Input */}
            <InputCustom 
              type="password" 
              placeholder="Enter Your Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange} 
            />
            {errors.password && <p className="text-red-500 text-xs pl-1">{errors.password}</p>}
            
            {/* General Error (Invalid credentials) */}
            {errors.general && <p className="text-red-500 text-xs text-center">{errors.general}</p>}

            {/* Sign In Button */}
            <Button type="submit" color="lightBlue" className="mt-4 w-full">SIGN IN</Button>
            <p className='align-middle'>Don't have Account? please <Link  className='underline text-[#ffbc13]' to='/user/signup'>SignUP</Link></p>
          </form>
        </Card>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2 h-full">
        <img 
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" 
          alt="Background" 
          className="object-cover w-full h-full" 
        />
      </div>
    </div>
  );
};

export default SigninComponent;
