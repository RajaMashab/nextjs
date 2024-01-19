import React from 'react'
import Image from 'next/image'


import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
   <div className='bg-blue-400'>

<footer className="">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image
      src={require("../../../public/assets/Black White Elegant Monogram Initial Name Logo.png")}
      alt="Raja Mashab"
      width={50}
       height={50}    
       className='rounded-full'  /> 
      <span className="ml-3 text-xl text-white">Raja Mashab</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      Contact me
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center
     sm:justify-start">
       
     <a
     
    target="_blank"
     href={"https://www.facebook.com/raja.mashabturk"}
     className='text-gray-500 flex-1'
     
     >
    <FaFacebook className="text-3xl  hover:text-blue-950"/>
     
     
     </a>
     <a
     
    target="_blank"
     href={"https://twitter.com/RajaMashab7"}
     className='text-gray-500 flex pl-4'
     
     >
    <FaTwitter className="text-3xl  hover:text-black"/>
     
     
     </a>
     <a
     
     target="_blank"
      href={"https://www.instagram.com/rajamashab432/"}
      className='text-gray-500 flex pl-4'
      
      >
     <FaInstagram className="text-3xl  hover:text-pink-950"/>
      
      
      </a>
      <a
     
     target="_blank"
      href={"https://wa.me/923128717821"}
      className='text-gray-500 flex pl-4'
      
      >
     <FaWhatsapp className="text-3xl  hover:text-green-950"/>
      
      
      </a>
      
      <a
     
     target="_blank"
      href={"https://www.linkedin.com/in/raja-mashab-73a534287/"}
      className='text-gray-500 flex pl-4'
      
      >
     <BsLinkedin className="text-3xl  hover:text-blue-950"/>
      
      
      </a>
    </span>
  </div>
</footer>


   </div>
  )
}

export default Footer


