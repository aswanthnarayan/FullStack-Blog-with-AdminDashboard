import React, { useState } from 'react'
import logo from '../../assets/UserAssets/logo1.png'
import defaultUser from '../../assets/UserAssets/man.png'
import { IoMdArrowDropdown ,IoMdArrowDropup} from "react-icons/io";

const AdminNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    return (
      <div className='flex items-center justify-between p-4 sticky top-0 z-50 bg-white'>
        <div>
          {/* <IoLogoYoutube size={40}/> */}
          <img className='w-28 rounded-full' src={logo} alt="logo" />
        </div>
  
        {/* For larger screens, the menu is visible */}
        <div className='hidden md:flex items-center gap-4'>
          <ul className='flex gap-4'>
            <li>Logout</li>
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
              <li className='p-2'>Profile</li>
              <li className='p-2'>Logout</li>
            </ul>
          </div>
        )}
      </div>
    );
}

export default AdminNavbar