import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-black flex flex-wrap flex-col content-center items-center justify-center w-full'>
        {/* Heading */}
        <div>
            <h1 className='text-green font-libre font-black text-lg xl:text-xxl'><span className='text-red'>About </span>Us</h1>
        </div>

        {/* Content */}
        <div className='flex flex-col px-20 w-full'>
            {/* Vision */}
            <div className='flex flex-row flex-wrap justify-between content-center'>
                {/* Wordings */}
                <div className='flex flex-col flex-wrap pb-5 sm:text-center'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-l xl:text-xl'>Vision</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-s xl:text-sl'>
                            Provide security and ensure drug free environment
                        </p>
                    </div>
                </div>

                {/* Picture */}
                <div>
                    Picture1
                </div>
            </div>

            {/* Mission */}
            <div className='flex flex-row-reverse flex-wrap justify-between pb-5'>
                {/* Wordings */}
                <div className='flex flex-col flex-wrap sm:text-center xl:text-end'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-l xl:text-xl'>Mission</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-s xl:text-sl'>
                        We are an employee focused and customer driven <br />
                        company with a passion to ensure a drug free environment. <br />
                        We strive to provide our clients a piece of mind to go about <br />
                        their daily lives as we work tirelessy and smart to ensure <br />
                        their safety. <br />
                        We love canines and go an extra step to ensure they <br />
                        are comfortable and well taken care of.
                        </p>
                    </div>
                </div>

                {/* Picture */}
                <div>
                    Picture2
                </div>
            </div>

            {/* Value Statement */}
            <div className='flex flex-row flex-wrap justify-between content-center'>
                {/* Wordings */}
                <div className='flex flex-col flex-wrap sm:text-center'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-l xl:text-xl'>Value Statement</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-s xl:text-sl'>
                            As a company we do value flexibility, responsiveness, <br />
                            customer service, human life, canines, safety, integrity, <br />
                            professionalism and team work
                        </p>
                    </div>
                </div>

                {/* Picture */}
                <div>
                    Picture3
                </div>
            </div>
        </div>
    </div>
  )
}

export default About