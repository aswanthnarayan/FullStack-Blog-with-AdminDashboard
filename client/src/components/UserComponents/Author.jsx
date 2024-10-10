import React from 'react';
import { Typography } from '@material-tailwind/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Author = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-full">

      <div className="flex flex-col justify-center items-start w-full lg:w-6/12 p-4">
        <div className="mb-4">
          <Typography variant='h3' className="text-2xl md:text-3xl">Hello, I am Aswanth</Typography>
          <p className="text-lg md:text-xl">Web Developer</p>
        </div>
        <p className="text-sm md:text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur aut? 
          Est a nemo, ipsa labore praesentium debitis explicabo consequatur cupiditate 
          excepturi, perspiciatis cumque aperiam reiciendis, totam nesciunt eum alias 
          consequuntur beatae optio veniam accusantium earum. Voluptas deserunt sint error 
          dolor exercitationem, impedit fugit suscipit veritatis, perspiciatis repellendus 
         
        </p>
        <p className="mb-2">Connect with me on:</p>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 gap-4">
          <li>
            <FaGithub size={30} />
          </li>
          <li>
            <FaLinkedin size={30} />
          </li>
          <li>
            <FaInstagram size={30} />
          </li>
          <li>
            <FaFacebook size={30} />
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-6/12 h-64 min-h-64 m-0  lg:h-auto lg:min-h-auth-h xl:h-auth-h relative">
        <img 
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" 
          alt="Background" 
          className="absolute inset-0 w-full md:w-96 md:mx-auto  lg:w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}

export default Author;
