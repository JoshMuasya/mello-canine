import React from 'react';
import Image from 'next/image';
import logo1 from '../public/Logo1.png';

const Hero = () => {
  return (
    // Background
    <div className='h-screen bg-fixed bg-cover herosection'>
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 h-screen bg-herobg' />
      <div className='absolute z-10 w-full h-screen flex flex-wrap flex-col text-justify xl:flex-row justify-center content-center items-center'>
        {/* Logo */}
        <div className='w-1/4 xl:w-96 xl:pr-32 pb-7 xl:pb-0'>
          <Image 
            src={logo1}
            alt="Logo"
          />
        </div>

        {/* Details */}
        <div className='flex flex-col flex-wrap justify-center content-center items-center xl:items-start'>
          <div>
            <h3 className='text-sl pb-7 xl:pb-3 xl:text-xl font-semibold'>Welcome to</h3>
          </div>
          <div className='flex flex-col pb-7 xl:pb-3 lg:flex-row'>
            <h1 className='font-black text-l xl:text-xxl text-red xl:pb-0 lg:pr-5'>MELLO</h1>
            <h1 className='font-black text-l xl:text-xxl xl:pt-0'>CANINE</h1>
          </div>
          <div className='flex flex-col pb-7 xl:pb-3 justify-center content-center items-center xl:items-start'>
            <h4 className='text-justify font-medium text-s xl:text-l'>
              Where,
            </h4>
            <h4 className='text-justify font-medium text-s xl:text-l'>
              we make bad Dogs Good
            </h4>
            <h4 className='text-justify font-medium text-s xl:text-l'>
              and Good Dogs Better
            </h4>
          </div>

          {/* Buttons */}
          <div className='flex flex-row justify-between pt-5'>
            <button className='bg-white text-red w-28 mr-3 lg:w-52 h-9 lg:h-14 font-bold rounded-full border border-red drop-shadow-dropred
            hover:text-white hover:bg-red hover:border-none'>
              About Us
            </button>

            <button className='bg-red text-white w-28 ml-3 lg:w-52 h-9 lg:h-14 rounded-full drop-shadow-dropblack font-bold
            hover:bg-white hover:text-red hover:border hover:border-red hover:rounded-full'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero