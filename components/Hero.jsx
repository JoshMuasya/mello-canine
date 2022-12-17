import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    // Background
    <div className='flex h-screen bg-fixed bg-cover herosection'>
      {/* Overlay*/}
      <div className='absolute top-0 bottom-0 left-0 right-0 h-screen bg-herobg'>
        <div className='flex flex-wrap justify-center content-center'>
          <div className='absolute z-10 flex flex-row flex-wrap justify-around content-center items-center inset-y-44'>
            {/* Logo */}
            <div className='pr-32'>
              <Image 
                src="/Logo1.png"
                alt="Logo"
                width="324"
                height="136"
              />
            </div>

            {/* Details */}
            <div className='flex flex-col flex-wrap'>
              <div>
                <h3 className='text-xl font-semibold'>Welcome to</h3>
              </div>
              <div>
                <h1 className='font-black text-xxl'><span className='text-red'>MELLO</span> CANINE</h1>
              </div>
              <div>
                <h4 className='font-medium text-lg'>
                  Where, <br />
                  we make bad Dogs Good <br />
                  and Good Dogs Better <br />
                </h4>
              </div>

              {/* Buttons */}
              <div className='flex flex-row justify-between pt-10'>
                <button className='bg-white text-red w-52 h-14 font-bold rounded-full border border-red drop-shadow-dropred
                hover:text-white hover:bg-red hover:border-none'>
                  About Us
                </button>

                <button className='bg-red text-white w-52 h-14 rounded-full drop-shadow-dropblack font-bold
                hover:bg-white hover:text-red hover:border hover:border-red hover:rounded-full'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero