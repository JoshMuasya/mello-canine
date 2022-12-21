import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [click, setClick] = useState(false);
  const [visibility, setVisibility] = useState('visible');
  const [color, setColor] = useState('bg-navbarbg')

  const handleNav = () => {
    setNav(!nav);

    setClick(!click);
    if (click) {
      setVisibility('visible');
      setColor('rgba(0, 0, 0, 0.7)');
    } else {
      setVisibility('hidden');
      setColor('transparent');
    }
  }

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-20 bg-navbarbg'>
      <div className='px-10 h-20 flex flex-row flex-wrap content-center justify-between'>
        {/* Logo */}
        <div>
          <a href='#' className='block' id='logo' style={{visibility: `${visibility}`}}>
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
          <ul className='md:flex flex-row flex-wrap content-center hidden'>
            <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>HOME</a></li>
            <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>ABOUT</a></li>
            <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>SERVICES</a></li>
            <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>GALLERY</a></li>
            <li className='p-5'><a href="#" className='font-medium text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>CONTACT</a></li>
          </ul>
        </div> 

        {/* Mobile Button */}
        <div id='ham' onClick={handleNav} className='md:hidden block z-30'>
          {nav ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav
          ? 'md:hidden fixed top-0 right-0 left-[50%] flex flex-col justify-center items-center w-2/4 h-4/5 bg-navbarbg text-center ease-in duration-500 rounded-bl-3xl'
          : 'md:hidden absolute top-0 left-[100%] right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
        
        <a href='#' className='absolute top-[5%]'>
          <Image 
            src="/Logo.png"
            alt="Logo"
            width="100"
            height="80"
          />
        </a>

        <ul>
          <li className='p-5'><a href="#" className='font-medium text-red hover:text-green'>HOME</a></li>
          <li className='p-5'><a href="#" className='font-medium text-red hover:text-green'>ABOUT</a></li>
          <li className='p-5'><a href="#" className='font-medium text-red hover:text-green'>SERVICES</a></li>
          <li className='p-5'><a href="#" className='font-medium text-red hover:text-green'>GALLERY</a></li>
          <li className='p-5'><a href="#" className='font-medium text-red hover:text-green'>CONTACT</a></li>
        </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar