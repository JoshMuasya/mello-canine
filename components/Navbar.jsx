import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='bg-navbarbg fixed left-0 top-0 w-full z-20'>
      <div className='px-10 h-20 flex flex-row flex-wrap content-center justify-between'>
          {/* Logo */}
          <div>
              <a href='#'>
                <Image 
                  src="/Logo.png"
                  alt="Logo"
                  width="100"
                  height="80"
                />
              </a>
          </div>

          {/* Links */}
          <div className='flex flex-row flex-wrap content-center justify-center'>
            <ul className='flex flex-row flex-wrap content-center'>
              <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>HOME</a></li>
              <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>ABOUT</a></li>
              <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>SERVICES</a></li>
              <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>GALLERY</a></li>
              <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>CONTACT</a></li>
            </ul>
          </div>          
      </div>
    </div>
  )
}

export default Navbar