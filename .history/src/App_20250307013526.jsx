import React from 'react'

function App() {
  return (
    <div className=''>
      <div className="sm:flex">
      <div className='hero sm:p-7 sm:text-[2.7vw] text-[8vw]  sm:w-[53vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold'>hitoutvrma</logo>
        <p className='mt-28 leading-none text-[#8c8c8c]'><span className='text-white font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>

        <div className='text-xl pt-4'>
          <p className='text-[#8c8c8c]'>creative Director and founder at </p>
          <p className='font-semibold'>bitCheat</p>
        </div>
        <div className='flex sm:text-[2vh] sm:pb-0 pb-12 text-[1.8vh] sm:pt-30 pt-28 flex-col sm:gap-3 gap-1'>
          <p className='text-[#8c8c8c] pb-4 text-[1.6vh]  sm:text-[1.8vh]'>CONNECT</p>
          <div className='w-[90%] '>Twitter/X</div>
          <div className='w-[90%] h-[0.1vh] bg-amber-500'></div>
          <div className='w-[90%] '>Instagram</div>
          <div className='w-[90%] h-[0.1vh] bg-amber-500'></div>
          <div className='w-[90%] '>Linkedin</div>
          <div className='w-[90%] h-[0.1vh] bg-amber-500'></div>
          <div className='w-[90%] '>Email</div>
          <div className='w-[90%] h-[0.1vh] bg-amber-500'></div>
        </div>
        </div>
        <div style={{ backgroundImage: "url('/user.jpg')" }} className='bg-cover sm:bg-center bg-[center_top_80%] w-[95%] h-[50vh] sm:w-[43vw] sm:h-[92vh]  bg-[#3a3a3a] rounded-md'>          
        </div>
      </div>

    </div>
  )
}

export default App
