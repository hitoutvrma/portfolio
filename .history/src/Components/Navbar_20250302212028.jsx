import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <div>Bitcheat</div>
        <div className='flex space-x-4'>
          <span>Games</span>
          <span>Blogs</span>
          <span>About</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </nav>
  )
}

export default Navbar
