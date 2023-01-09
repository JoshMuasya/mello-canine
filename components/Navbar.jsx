import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import logo from '../public/Logo.png';

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
      <div className='px-5 h-20 flex flex-row flex-wrap content-center justify-between'>
        {/* Logo */}
        <div>
          <a href='#' className='block w-20 md:w-32' style={{visibility: `${visibility}`}}>
            <Image 
              src={logo}
              alt="Logo"
            />
          </a>
        </div>

        {/* Links */}
        <div className='flex flex-row flex-wrap content-center justify-center'>
          <ul className='md:flex flex-row flex-wrap content-center hidden'>
            <li className='p-5'><a href="#" className='font-libre font-semibold md:text-xs xl:text-s lg:text-sl text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>HOME</a></li>
            <li className='p-5'><a href="#" className='font-libre font-semibold md:text-xs xl:text-s lg:text-sl text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>ABOUT</a></li>
            <li className='p-5'><a href="#" className='font-libre font-semibold md:text-xs xl:text-s lg:text-sl text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>SERVICES</a></li>
            <li className='p-5'><a href="#" className='font-libre font-semibold md:text-xs xl:text-s lg:text-sl text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>GALLERY</a></li>
            <li className='p-5'><a href="#" className='font-libre font-semibold md:text-xs xl:text-s lg:text-sl text-red hover:text-green ease-in duration-300 hover:ease-in hover:duration-300'>CONTACT</a></li>
          </ul>
        </div> 

        {/* Mobile Button */}
        <div id='ham' onClick={handleNav} className='md:hidden block z-30 text-red hover:text-green'>
          {nav ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav
          ? 'md:hidden fixed top-0 right-0 left-[50%] flex flex-col justify-center items-center w-2/4 h-4/5 bg-navbarbg text-center ease-in duration-500 rounded-bl-3xl'
          : 'md:hidden absolute top-0 left-[100%] right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500'
        }>
        
        <a href='#' className='absolute top-[5%]'>
          <Image 
            src="/Logo.png"
            alt="Logo"
            width="100"
            height="80"
          />
        </a>

        {/* Mobile Links */}
        <ul>
          <li className='p-5'><a href="#" className='font-libre font-semibold text-red hover:text-green'><HomeIcon className='pr-1 w-7' />HOME</a></li>
          <li className='p-5'><a href="#" className='font-libre font-semibold text-red hover:text-green'><InfoIcon className='pr-1 w-7' />ABOUT</a></li>
          <li className='p-5'><a href="#" className='font-libre font-semibold text-red hover:text-green'><MiscellaneousServicesIcon className='pr-1 w-7' />SERVICES</a></li>
          <li className='p-5'><a href="#" className='font-libre font-semibold text-red hover:text-green'><CollectionsIcon className='pr-1 w-7' />GALLERY</a></li>
          <li className='p-5'><a href="#" className='font-libre font-semibold text-red hover:text-green'><ContactEmergencyIcon className='pr-1 w-8' />CONTACT</a></li>
        </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar