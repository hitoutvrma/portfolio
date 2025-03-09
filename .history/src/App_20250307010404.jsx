import React from 'react'

function App() {
  return (
    <div className=''>
      <div className="sm:flex">
      <div className='hero sm:p-7 sm:text-5xl text-[20vh] w-[80vw] sm:w-[40vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold'>hitoutvrma</logo>
        <p className='mt-28 text-[#8c8c8c]'><span className='text-white font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>

        <div className='text-xl pt-4'>
          <p>creative Director and founder at </p>
          <p className='font-semibold'>bitCheat</p>
        </div>
        </div>
        <div style={{ backgroundImage: "url('/user.jpg')" }} className='sm:ml-[12vw] bg-cover bg-center w-[43vw] h-[92vh]  bg-[#3a3a3a] rounded-md'>          
        </div>
      </div>

    </div>
  )
}

export default App
