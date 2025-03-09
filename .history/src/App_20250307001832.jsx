import React from 'react'

function App() {
  return (
    <div className=''>
      <div className="sm:flex">
      <div className='hero sm:p-7 sm:text-5xl text-4xl w-[80vw] sm:w-[40vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold'>H-V</logo>
        <p className='mt-28'><span className='font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>
        </div>
        <div style={{ backgroundImage: "url('/user.jpg')" }} className='sm:ml-[12vw] w-[43vw] h-[92vh]  bg-amber-400'>
          
        </div>
      </div>

    </div>
  )
}

export default App
