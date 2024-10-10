import React from 'react'
import logo from '../../assets/UserAssets/logo1.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    

<footer class="bg-white rounded-lg  mt-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-8" alt="Flowbite Logo" />
               
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-2">
                <li>
                    <FaGithub size={30}/>
                </li>
                <li>
                    <FaLinkedin size={30}/>
                </li>
                <li>
                    <FaInstagram size={30}/>
                </li>
                <li>
                    <FaFacebook size={30}/>
                </li>
           
            </ul>
        </div>
        <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">Made with &#10084; | <a href="https://flowbite.com/" class="hover:underline"></a>ASWANTH C K</span>
    </div>
</footer>


  )
}

export default Footer