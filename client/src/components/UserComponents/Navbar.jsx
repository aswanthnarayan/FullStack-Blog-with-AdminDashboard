import React, { useState } from 'react'
import logo from '../../assets/UserAssets/logo1.png'
import defaultUser from '../../assets/UserAssets/man.png'
import { IoMdArrowDropdown ,IoMdArrowDropup} from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { logoutUser } from '../../store/features/auth/AuthSlice';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  
  const handleLogout = async()=>{
    try {
      await axios.post('http://localhost:3000/user/logout', {}, {
        withCredentials: true, 
      });
    } catch (error) {
      console.error('Error during logout:', error.response?.data || error.message)
    }
      dispatch(logoutUser());
      // window.location.href = '/user/home';
      navigate('/user/home')
  }

  return (
    <div className='flex items-center justify-between p-4 sticky top-0 z-50 bg-white'>
      <div>
        {/* <IoLogoYoutube size={40}/> */}
        <img className='w-28 rounded-full' src={logo} alt="logo" />
      </div>

      {/* For larger screens, the menu is visible */}
      <div className='hidden md:flex items-center gap-4'>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Write</li>
          <Link to={isAuthenticated && user ? `/user/profile/${user._id}` : '/user/signin'}>Profile</Link>
          {isAuthenticated?<Link onClick={handleLogout}>Logout</Link>:<Link to='/user/signin'>SignIn</Link>}
        </ul>
        <div className='flex items-center'>
          <img className='w-8 rounded-full' src={defaultUser} alt="profile_Img" />
        </div>
      </div>

      {/* For small and medium screens */}
      <div className='md:hidden flex items-center'>
        <img className='w-8 rounded-full' src={defaultUser} alt="profile_Img" />
        {!dropdownOpen?<IoMdArrowDropdown size={20} className='ml-2 transition duration-900 ease-in-out' onClick={toggleDropdown} />:<IoMdArrowDropup size={20} className='ml-2 transition duration-900 ease-in-out' onClick={toggleDropdown} />}
      </div>

      {/* Dropdown menu - visible on small and medium screens */}
      {dropdownOpen && (
        <div className='md:hidden absolute top-14 right-4 bg-white shadow-lg rounded-md z-999'>
          <ul className='flex flex-col p-4 px-8'>
            <li className='p-2'>Home</li>
            <li className='p-2'>Write</li>
          <Link className='p-2' to={isAuthenticated && user ? `/user/profile/${user._id}` : '/user/signin'}>Profile</Link>

          {isAuthenticated?<li onClick={handleLogout} className='p-2'>Logout</li>:<Link to='/user/signin' className='p-2'>SignIn</Link>}

          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
