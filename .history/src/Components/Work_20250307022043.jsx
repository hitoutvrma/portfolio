import React from 'react'

function Work() {
  return (
    <div className='h-screen sm:p-5 '>
      <div className='pt-15  pb-15'><p>WORK & PROJECTS</p></div>
      <div>
        <div className="bg-green-900 relative h-90 sm:h-70 sm:w-70 w-90 card">
            <h1 className='p-2 text-[1.9vh]'>Honeytype</h1>
            <footer className='bottom-0  absolute'>
                <button className='m-2 px-2 backdrop-blur-xl bg-white/30   text-[1.9vh] '>Web</button>
                <button className='m-2 px-2 backdrop-blur-xl bg-white/30  text-[1.9vh] '>React</button>
                </footer>
        </div>
      </div>
    </div>
  )
}

export default Work
