import React from 'react';
import Image from 'next/image';

import logo1 from '../public/Logo.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => (
    <div className='bg-black h-1/3 flex justify-center items-center'>
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            {/* Logo */}
            <div className='pb-10'>
                <a href="#">
                    <Image src={logo1} alt="Logo" width='100' height='80' />
                </a>
            </div>

            {/* Links */}
            <div className='w-96 pb-10 flex flex-row justify-around'>
                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300 font-bold'>
                    <a href="#about">About Us</a>
                </div>
                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300 font-bold'>
                    <a href="#gallery">Gallery</a>
                </div>
                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300 font-bold'>
                    <a href="#services">Services</a>
                </div>
            </div>

            {/* Socials */}
            <div className='pb-10 w-56 flex flex-row justify-between'>
                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300'>
                    <TwitterIcon className='text-xl' />
                </div>

                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300'>
                    <InstagramIcon className='text-xl' />                    
                </div>

                <div className='text-red ease-in duration-300 hover:text-green hover:ease-in hover:duration-300'>
                    <FacebookIcon className='text-xl' />
                </div>
            </div>

            {/* Copyright */}
            <div>
                <small>&#169; 2023 Digimatic Marketers. All Rights Reserved</small>
            </div>
        </div>
    </div>
)

export default Contact