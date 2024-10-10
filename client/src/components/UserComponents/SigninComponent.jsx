import React from 'react';
import { Typography, Card, Button } from '@material-tailwind/react';
import { InputCustom } from './CustomInput';

const SigninComponent = () => {
  return (
    <div className="flex h-auth-h">
      {/* Card Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 p-2 md:p-4">
        <Card className="w-full max-w-md p-3 shadow-2xl py-12">
         <div className='flex flex-col gap-3'>
         <Typography variant="h3" className="text-3xl text-center mb-6">SIGN IN</Typography>
          <InputCustom type="email" placeholder="Enter Your Email" />
          <InputCustom type="password" placeholder="Enter Your Password" />
         </div>
          <Button color="lightBlue" className="mt-4 w-full">SIGN IN</Button>
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
  )
}

export default SigninComponent