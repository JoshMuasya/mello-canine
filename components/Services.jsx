import React from 'react';
import Image from 'next/image';

import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import PetsIcon from '@mui/icons-material/Pets';

import Dog from '../public/dog1.jpg';

const Services = () => {
  return (
    <div id='services' className='bg-black m-0 flex justify-center content-center items-center h-auto p-10 w-full'>
        <div className='flex flex-wrap flex-col w-full'>
            {/* Heading */}
            <div className='xl:text-center'>
                <h1 className='text-green font-libre text-center text-ml xl:text-xxl font-black'><span className='text-red'>OUR</span><br /> SERVICES</h1>
            </div>

            {/* Body */}
            <div className='flex flex-col xl:flex-row xl:justify-around items-center'>
                {/* Academy */}
                <div className='border-2 mb-5 xl:mb-0 border-red rounded-2xl bg-greenbg py-5 w-auto px-5 xl:py-10 xl:px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <SchoolIcon className=' text-m xl:text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-sl xl:text-l'>
                            ACADEMY
                        </h2>
                    </div>

                    <div className='w-48 xl:w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-xs xl:text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-28 xl:w-56 h-14 rounded-lg'>
                            More
                        </button>
                    </div>
                </div>

                {/* Security */}
                <div className='border-2 mb-5 xl:mb-0 border-red rounded-2xl bg-greenbg py-5 w-auto px-5 xl:py-10 xl:px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <SecurityIcon className='text-m xl:text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-sl xl:text-l'>
                            SECURITY
                        </h2>
                    </div>

                    <div className='w-48 xl:w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-xs xl:text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-28 xl:w-56 h-14 rounded-lg'>
                            More
                        </button>
                    </div>
                </div>

                {/* Boarding */}
                <div className='border-2 border-red rounded-2xl bg-greenbg py-5 w-auto px-5 xl:py-10 xl:px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <PetsIcon className='text-m xl:text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-sl xl:text-l'>
                            BOARDING & <br />
                            DAY CARE
                        </h2>
                    </div>

                    <div className='w-48 xl:w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-xs xl:text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-28 xl:w-56 h-14 rounded-lg'>
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services