import React from 'react'
import { Input, Textarea, Button, Typography, Select, Option } from '@material-tailwind/react';


const WriteComponent = () => {
  return (
    <div className='w-screen h-auto md:w-[950px] md:h-[550px] lg:h-[400px]  flex flex-col justify-center mx-auto '>
      <Typography variant="h2" className="text-center mb-4">Share your Ideas</Typography>
      <div className="flex flex-col md:flex-row p-4 ">
        <div className="flex flex-col gap-3 mb-4 md:flex-1 md:mr-4 h-full">
          <Select label="Select Category" className="w-full mb-4">
            <Option>Technology</Option>
            <Option>Arts</Option>
            <Option>Sports</Option>
            <Option>Entertainment</Option>
            <Option>Lifestyle</Option>
          </Select>
          <Input label="Heading" className="w-full mb-4" />
          <Textarea label="Your Ideas" className="w-full mb-4" />
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <img
            className="h-44 w-full rounded-lg object-cover mb-2"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature"
          />
          <Button fullWidth className="self-end ">Add an Image</Button>
        </div>
      </div>
      <div className="flex justify-center md:self-start pl-0 md:pl-5 mb-4">
        <Button>Publish</Button>
      </div>
    </div>
  )
}

export default WriteComponent



