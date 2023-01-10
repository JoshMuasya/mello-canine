import React from 'react'

const Email = () => {
  return (
    <div className='bg-black h-screen w-full flex items-center justify-center align-middle'>
      {/* Email */}
      <div className='flex flex-col flex-wrap items-center justify-center'>
        {/* Heading */}
        <div>
          <h1 className='text-l xl:text-xxl text-red font-libre font-black'>Email Us</h1>
        </div>

        {/* Form */}
        <form className='flex flex-col h-auto justify-around bg-transparent items-center'
        action="">
          {/* Name */}
          <input className='mb-10 border-2 border-green hover:border-red text-center font-semibold text-ml rounded-xl text-red placeholder:text-red bg-transparent' name='name' type='text' placeholder='Name:' />

          {/* Email */}                
          <input className='mb-10 border-2 border-green hover:border-red text-center font-semibold text-ml rounded-xl text-red placeholder:text-red bg-transparent' name='email' type='email' placeholder='Email:' />

          {/* Message */}
          <textarea className='mb-10 border-2 border-green hover:border-red text-center font-semibold text-ml rounded-xl text-red placeholder:text-red bg-transparent' name='message' type='text' placeholder='Message:' />

          {/* Button */}                
          <button className='bg-red text-white w-28 ml-3 lg:w-52 h-9 font-libre lg:h-14 rounded-full drop-shadow-dropblack font-bold
          hover:bg-white hover:text-red hover:border hover:border-red hover:rounded-full'>
            Contact Us
          </button>
        </form>
      </div>
    </div>
  )
}

export default Email