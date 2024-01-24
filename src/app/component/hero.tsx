

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div id="Hero" >

<section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-600">
      My Name is  Raja Mashab
    
        <br className="hidden lg:inline-block" />
        <div className='w-[100px] h-[2px]bg-blue-700'></div>
        <Typewriter
  options={{
    strings: ['Front End Developer', 'Ui/Ux Designer',' Student of','Business Administration'],
    autoStart: true,
    loop: true,
  }}
 
/>
</h1>
      <p className="mb-8 leading-relaxed text-white">
      Im Raja Mashab, a BBA student with a specialization in Finance and Accounting. Recently, I embarked on an exciting journey into the world of technology, diving into web development with TypeScript and Next. js13 Additionally, Ive delved into the fascinating realm of Generative 
      AI, exploring its endless possibilities..
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        
        <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center "
        alt="hero"
        src={require("../../../public/assets/WhatsApp Image 2023-12-24 at 15.04.18_40c84906_prev_ui (1).png")}
      />
    </div>
  </div>
</section>




    </div>
  )
}

export default Hero