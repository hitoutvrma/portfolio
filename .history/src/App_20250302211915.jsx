import React from 'react'

function App() {
  return (
    <div>
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <div>Logo</div>
        <div className='flex space-x-4'>
          <span>Games</span>
          <span>Blogs</span>
          <span>About</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </nav>
    </div>
  )
}

export default App
