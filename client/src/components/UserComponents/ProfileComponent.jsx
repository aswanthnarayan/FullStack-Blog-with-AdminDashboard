import React from 'react'
import user from '../../assets/UserAssets/user.png';
import { Typography, Button, Input, Textarea } from '@material-tailwind/react';


const ProfileComponent = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
    <Typography variant="h5" className="mb-4 self-center">Aswanth C K</Typography>
    <div className="flex justify-center mb-4">
          <img src={user} alt="User" className="w-36 h-36 rounded-full" />
    </div>

    <div className="mb-6">
      <Typography variant="h6" className="mb-2">Personal Details</Typography>
      <div className="flex flex-col space-y-4">
        <Input label="Name" defaultValue="Aswanth" />
        <Input label="Username" defaultValue="username" />
        <Input label="Email" defaultValue="email@example.com" />
        <Input label="Profile Tag" defaultValue="Frontend Dev" />
        
        <Textarea label="Profile Summary" defaultValue="Profile summary" />
      </div>
    </div>

    <div className="mb-6">
      <Typography variant="h6" className="mb-2">Social Links</Typography>
      <div className="flex flex-col space-y-4">
        <Input label="GitHub Link" defaultValue="github link" />
        <Input label="LinkedIn Link" defaultValue="linkedin link" />
        <Input label="Instagram Link" defaultValue="instagram link" />
        <Input label="Facebook Link" defaultValue="facebook link" />
      </div>
    </div>

    <div>
      <Typography variant="h6" className="mb-2">Enter Password to Update</Typography>
      <Input type="password" label="Enter Password" placeholder="Enter password" />
      <Button color="lightBlue" className="mt-4">Update</Button>
    </div>
  </div>
  )
}

export default ProfileComponent