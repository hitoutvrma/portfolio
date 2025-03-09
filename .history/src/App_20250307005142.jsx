import React from 'react'

function App() {
  return (
    <div className=''>
      <div className="sm:flex">
      <div className='hero sm:p-7 sm:text-5xl text-4xl w-[80vw] sm:w-[40vw]'>
      <logo className='text-4xl sm:text-5xl font-semibold'>H-V</logo>
        <p className='mt-28'><span className='font-semibold'>Hitesh Verma</span> is an award-winning multidisciplinary digital web developer based in India</p>
        </div>
        <div style={{ backgroundImage: "url('/userbg.png')" }} className='sm:ml-[12vw] bg-cover bg-center w-[30vw] h-[89vh]  bg-[#2a2a2a] rounded-md'>
          
        </div>
      </div>

    </div>
  )
}

export default App
