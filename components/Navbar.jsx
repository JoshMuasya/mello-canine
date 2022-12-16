import React from 'react'

const Navbar = () => {
  return (
    <div className='h-1/6 px-10 bg-black opacity-80 flex flex-row justify-between'>
        {/* Logo */}
        <div>
            Logo
        </div>

        {/* Links */}
        <div>
            <ul className='flex flex-row'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar