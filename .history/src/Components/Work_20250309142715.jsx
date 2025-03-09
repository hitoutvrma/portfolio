import React, { useState } from 'react'
import Card from './Card'


function Work() {
  const [current,setCurrent] = useState("");
  return (
    <div className='h-auto min-h-screen sm:p-5 '>
      <div className='pt-15  pb-5'><p>WORK & PROJECTS</p></div>
      <div className='flex gap-8 pb-5'>
        <div onClick={()=>setCurrent("react")} className='py-1 px-2 bg-gray-400 text-black rounded-sm'>React</div><div className='py-1 px-2 bg-gray-400 text-black rounded-sm'>Nodejs</div>
        <div className='py-1 px-2 bg-gray-400 text-black rounded-sm'>Express</div><div className='py-1 px-2 bg-gray-400 text-black rounded-sm'>TailwindCSS</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-10 gap-x-8'>
        {current==='react'?(<></><Card bgImage={'/honeytype.gif'}
        //  name={"honeytype"}
         width={"sm:w-165"}
         height={"sm:h-95"}
         />
         <Card bgImage={'/image.png'}
         name={"Dragging Cards"}
         width={"sm:w-165"}
         height={"sm:h-95"}
         />
        <Card bgImage={'/image.png'}
         name={"honeytype"}
         width={"sm:w-165"}
         height={"sm:h-95"}
         />):""}


         
      </div>
    </div>
  )
}

export default Work
