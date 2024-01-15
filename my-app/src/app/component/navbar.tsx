
import React  from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/assets/Black White Elegant Monogram Initial Name Logo.png'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar  = () =>{
    return(
  <>    
<div className='bg-white z-50 sticky top-0'>


<header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">


   <Image  src={require("../../../public/assets/Black White Elegant Monogram Initial Name Logo.png")}
     alt="Raja Mashab"
     width={50}
     height={50}
     className='rounded-full'
   />

      <span className="ml-3 text-xl">Raja Mashab</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      
      
      
      
      
      
    
    
     <Link href={"#Hero"} className="mr-5 hover:text-white">

      Home
      
      </Link>
      <Link href={"#About"}className="mr-5 hover:text-white">About</Link>
      <Link href={"#Skill"} className="mr-5 hover:text-white">skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-white">Project</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-white">Contact US</Link>
      
    </nav>

    
    
    
    
    
    
    
    
    <a 
     target ="_blank"
    
    href="/assets/CurriculamVitae.pdf">
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
      

     

     Download Cv
      
      
      <FaCloudDownloadAlt className="text-xl ml-2" />
    </button>
    </a>
  </div>
</header>












</div>
</> 
    )
}


export default Navbar