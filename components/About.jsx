import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-black flex flex-wrap flex-col content-center items-center justify-center w-full'>
        {/* Heading */}
        <div>
            <h1 className='text-green font-libre font-black text-xxl'><span className='text-red'>About </span>Us</h1>
        </div>

        {/* Content */}
        <div className='flex flex-col px-20 w-full'>
            {/* Vision */}
            <div className='flex flex-row flex-wrap justify-between content-center'>
                {/* Wordings */}
                <div className='flex flex-col flex-wrap pb-5'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-xl'>Vision</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-sl'>
                            Lorem Ipsum is simply dummy text of <br />
                            the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's <br />
                            standard dummy text ever since the 1500s, <br />
                            when an unknown printer took a galley of type <br />
                            and scrambled it to make a type specimen book. <br />
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
                <div className='flex flex-col flex-wrap text-end'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-xl'>Mission</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-sl'>
                            Lorem Ipsum is simply dummy text of <br />
                            the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's <br />
                            standard dummy text ever since the 1500s, <br />
                            when an unknown printer took a galley of type <br />
                            and scrambled it to make a type specimen book. <br />
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
                <div className='flex flex-col flex-wrap'>
                    {/* Heading */}
                    <div>
                        <h3 className='text-red font-semibold text-xl'>Value Statement</h3>
                    </div>

                    {/* Wording */}
                    <div>
                        <p className='text-green text-sl'>
                            Lorem Ipsum is simply dummy text of <br />
                            the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's <br />
                            standard dummy text ever since the 1500s, <br />
                            when an unknown printer took a galley of type <br />
                            and scrambled it to make a type specimen book. <br />
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