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
            <div className='text-center'>
                <h1 className='text-green font-libre text-xxl font-black'><span className='text-red'>OUR</span> SERVICES</h1>
            </div>

            {/* Body */}
            <div className='flex flex-row justify-around'>
                {/* Academy */}
                <div className='border-2 border-red rounded-2xl bg-greenbg py-10 px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <SchoolIcon className='text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-l'>
                            ACADEMY
                        </h2>
                    </div>

                    <div className='w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-56 h-14 rounded-lg'>
                            More
                        </button>
                    </div>
                </div>

                {/* Security */}
                <div className='border-2 border-red rounded-2xl bg-greenbg py-10 px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <SecurityIcon className='text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-l'>
                            SECURITY
                        </h2>
                    </div>

                    <div className='w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-56 h-14 rounded-lg'>
                            More
                        </button>
                    </div>
                </div>

                {/* Boarding */}
                <div className='border-2 border-red rounded-2xl bg-greenbg py-10 px-20 flex flex-col justify-center align-middle items-center'>
                    <div className='text-red pb-5'>
                        <PetsIcon className='text-xl' />
                    </div>

                    <div className='pb-5'>
                        <h2 className='text-red text-center font-black text-l'>
                            BOARDING & <br />
                            DAY CARE
                        </h2>
                    </div>

                    <div className='w-60 pb-5'>
                        <Image 
                            src={Dog}
                            alt='Academy Image'
                        />
                    </div>

                    <div className='pb-5'>
                        <p className='text-s text-red'>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit. <br /> 
                        Maecenas euismod turpis nec <br /> 
                        felis ultricies pellentesque. <br /> 
                        Vestibulum euismod auctor <br /> 
                        condimentum.
                        </p>
                    </div>

                    <div className='pb-5'>
                        <button className='bg-red w-56 h-14 rounded-lg'>
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