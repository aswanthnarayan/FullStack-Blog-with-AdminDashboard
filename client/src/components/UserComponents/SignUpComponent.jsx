import React, { useState } from 'react';
import { Typography, Card, Button } from '@material-tailwind/react';
import { InputCustom } from './CustomInput';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState) => ({
            ...prevState,
            [name]: '',  // Reset error message for the current input field
        }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        // Check if name, email, and username are not empty
        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.username) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        // Check if passwords match
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;  // If form is not valid, do not submit
        }

        try {
            const response = await axios.post('http://localhost:3000/user/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('User signed up successfully:', response.data);
            setFormData({
                name: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            });
            navigate('/user/signin');
        } catch (error) {
            // console.error('Error during sign-up:', error.response?.data || error.message);
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data?.error || 'Something went Wrong!';          
                // Handling different types of 400 errors based on the error message
                if (errorMessage.includes('Passwords do not match')) {
                  setErrors({ confirmPassword: 'Passwords do not match Please check your Passwords.' });
                } else if (errorMessage.includes('Name cannot be empty')) {
                  setErrors({ name: 'Name cannot be empty.Please try again.' });
                }
                else if (errorMessage.includes('Username cannot be empty')) {
                    setErrors({ username: 'Username cannot be empty.Please try again.' });
                  }
                  else if (errorMessage.includes('Email is already in use')) {
                    setErrors({ email: 'Email already exists.Please Login or use another' });
                  }
                  else if (errorMessage.includes('Username is already in use')) {
                    setErrors({ username: 'Email already exists.Please choose another' });
                  }
                 else {
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
        <div>
            <div className="flex h-auth-h">
                <div className="flex justify-center items-center w-full md:w-1/2 p-2 md:p-4">
                    <Card className="w-full max-w-md p-3 shadow-2xl py-6">
                        <div className='flex flex-col gap-2'>
                            <Typography variant="h3" className="text-3xl text-center mb-6">SIGN UP</Typography>

                            <InputCustom
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="text-red-500 text-xs pl-1 ">{errors.name}</p>}

                            <InputCustom
                                type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs pl-1 ">{errors.email}</p>}

                            <InputCustom
                                type="text"
                                placeholder="Enter Your Username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            {errors.username && <p className="text-red-500 text-xs pl-1 ">{errors.username}</p>}

                            <InputCustom
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p className="text-red-500 text-xs pl-1 ">{errors.password}</p>}

                            <InputCustom
                                type="password"
                                placeholder="Re-enter Your Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs pl-1 ">{errors.confirmPassword}</p>}
                        </div>
                        {errors.general && <p className="text-red-500 text-xs pl-1 ">{errors.general}</p>}
                        <Button color="lightBlue" className="mt-4 w-full" onClick={handleSubmit}>
                            SIGN UP
                        </Button>
                        <p className='align-middle mt-2'>Already have Account? please <Link  className='underline text-[#53B7B9]' to='/user/signin'>SignIn</Link></p>
                    </Card>
                </div>

                <div className="hidden md:block w-1/2 h-full">
                    <img
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="Background"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUpComponent;
