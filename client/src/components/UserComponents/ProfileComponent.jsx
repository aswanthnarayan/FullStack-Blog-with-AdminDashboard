import React, { useState } from 'react';
import userImage from '../../assets/UserAssets/user.png';
import { Typography, Button, Input, Textarea } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/features/auth/AuthSlice';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import UpdateSpinner from './UpdateSpinner';

const ProfileComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Initialize local state with user data
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profileTag, setProfileTag] = useState(user?.profileTag || '');
  const [profileSummary, setProfileSummary] = useState(user?.profileSummary || '');
  const [socialLinks, setSocialLinks] = useState({
    github: user?.socialLinks?.github || '',
    linkedin: user?.socialLinks?.linkedin || '',
    instagram: user?.socialLinks?.instagram || '',
    facebook: user?.socialLinks?.facebook || '',
  });
  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(userImage);
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
   //Verify password with backend
      const verifyResponse = await axios.post('http://localhost:3000/user/verify-password', {
        userId: user._id, 
        password, 
        withCredentials: true,
      });

      // If password is verified, proceed with the update
      if (verifyResponse.status === 200) {
       //FormData object to send both text and file data
        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('profileTag', profileTag);
        formData.append('profileSummary', profileSummary);
        formData.append('socialLinks', JSON.stringify(socialLinks)); // Send socialLinks as a JSON string
        if (selectedFile) {
          formData.append('profilePic', selectedFile); 
        }

        // Step 3: Send the update request
        const updateResponse = await axios.patch('http://localhost:3000/user/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
          withCredentials: true,
        });
        
        if (updateResponse.status === 200) {
          // Update the Redux state with the new user data
          dispatch(setUser({ user: updateResponse.data.user }));
          setError('');
          navigate('/user/home')
        } else {
          setError('Failed to update the profile');
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error); 
      } else {
        console.log(err);
        setError('An error occurred. Please try again.');
      }
    }
    finally {
      setLoading(false); 
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file); 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  if(loading){
    <UpdateSpinner/>
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <Typography variant="h5" className="mb-4 self-center">{name}</Typography>
      <div className="flex justify-center items-center mb-4 flex-col gap-4">
        <img 
        src={selectedFile ? imagePreview : (user.profilePic ? `http://localhost:3000${user.profilePic}` : userImage)}
        alt="User" className="relative w-36 h-36 rounded-full" />
        <Input type='file' onChange={handleImageChange} />
      </div>
      <div className="mb-6">
        <Typography variant="h6" className="mb-2">Personal Details</Typography>
        <div className="flex flex-col space-y-4">
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input label="Email" disabled value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Profile Tag" value={profileTag} onChange={(e) => setProfileTag(e.target.value)} />
          <Textarea label="Profile Summary" value={profileSummary} onChange={(e) => setProfileSummary(e.target.value)} />
        </div>
      </div>

      <div className="mb-6">
        <Typography variant="h6" className="mb-2">Social Links</Typography>
        <div className="flex flex-col space-y-4">
          <Input label="GitHub Link" value={socialLinks.github} onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })} />
          <Input label="LinkedIn Link" value={socialLinks.linkedin} onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })} />
          <Input label="Instagram Link" value={socialLinks.instagram} onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })} />
          <Input label="Facebook Link" value={socialLinks.facebook} onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })} />
        </div>
      </div>

      <div>
        <Typography variant="h6" className="mb-2">Enter Password to Update</Typography>
        <Input type="password" label="Enter Password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <Button color="lightBlue" className="mt-4" onClick={handleUpdate}>Update</Button>
      </div>
    </div>
  );
};

export default ProfileComponent;
