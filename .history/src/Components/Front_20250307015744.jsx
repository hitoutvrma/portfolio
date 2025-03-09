import React from 'react'

function Front() {
  return (
    <div className='sm:h-screen md:h-screen'>
    <div className="sm:flex">
      <div className='hero sm:p-5 sm:text-[3vw] text-[8vw]  sm:w-[53vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold font-[serif]'>hitoutvrma</logo>
        <p className='mt-28 leading-none text-[#8c8c8c]'><span className='text-white font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>

        <div className='text-xl pt-4'>
          <p className='text-[#8c8c8c]'>creative Director and founder at </p>
          <p className='font-semibold'>bitCheat</p>
        </div>
        <div className='flex sm:text-[2vh] sm:pb-0 pb-12 text-[1.8vh] md:pt-35 sm:pt-23 pt-28 flex-col sm:gap-3 gap-1'>
          <p className='text-[#8c8c8c] pb-4 text-[1.6vh]  sm:text-[1.8vh]'>CONNECT</p>
          <div className='w-[90%] font-bold '>Twitter/X</div>
          <div className='w-[90%]  h-[0.1vh] bg-[#8c8c8c]'></div>
          <div className='w-[90%] font-bold '>Instagram</div>
          <div className='w-[90%]  h-[0.1vh] bg-[#8c8c8c]'></div>
          <div className='w-[90%] font-bold'>Linkedin</div>
          <div className='w-[90%] h-[0.1vh] bg-[#8c8c8c]'></div>
          <div className='w-[90%] font-bold'>Email</div>
          <div className='w-[90%] h-[0.1vh] bg-[#8c8c8c]'></div>
        </div>
        </div>
        <div style={{ backgroundImage: "url('/user.jpg')" }} className='bg-cover sm:bg-center bg-[center_top_80%] w-[95%] h-[50vh] sm:w-[43vw] sm:h-[92vh]  bg-[#3a3a3a] rounded-md'>          
        </div>
      </div>
        </div>
  )
}

export default Front
