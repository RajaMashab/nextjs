import React from 'react'
import Image from 'next/image';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';

const About = () => {
  return (
    <div id='About' className='bg-blue-400'>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded-full"
          alt="Raja Mashab"
          src={require("../../../public/assets/WhatsApp Image 2023-12-24 at 15.04.18_40c84906_prev_ui (1).png")}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Me
          <br className="hidden lg:inline-block" />
         
        </h1>
        <p className="mb-8 leading-relaxed">
          
        I'm Raja Mashab, a BBA student with a specialization in Finance and Accounting. Recently, I embarked on an exciting journey into the world of technology, diving into web development with TypeScript and Next.
 js13 Additionally, I've delved into the fascinating realm of Generative AI, exploring its endless possibilities. My latest adventure includes MidJourney GPT-4, where I'm exploring cutting-edge AI innovations. Passionate about merging finance and technology, I seek to leverage my skills to create innovative solutions and contribute to the ever-evolving digital landscape. Join me on this journey of growth and innovation!

Feel free to customize it further to better reflect your personal style and aspirations.
          
          
          
        </p>
        <div className="flex justify-center">
        <a 
     target ="_blank"
    
    href="/assets/CurriculamVitae.pdf">
    <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
      

     

    Curriculam Vitae
      
      
      
    </button>
    </a> 
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About






