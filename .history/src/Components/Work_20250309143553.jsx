import React, { useState } from 'react'
import Card from './Card'



function Work() {
  const [current,setCurrent] = useState("react");
  return (
    <div className='h-auto min-h-screen sm:p-5 '>
      <div className='pt-15  pb-5 '><p>WORK & PROJECTS</p></div>
      <div className='flex gap-8  pb-10'>
        <div onClick={()=>setCurrent("react")} className='py-1 cursor-pointer px-2 bg-yellow-400 hover:bg-pink-200 text-black rounded-sm'>React</div>
        <div onClick={()=>setCurrent("fullstack")} className='py-1 cursor-pointer px-2 bg-yellow-400 hover:bg-pink-200 text-black rounded-sm'>Full Stack</div>
        <div onClick={()=>setCurrent("phaserjs")} className='py-1 cursor-pointer px-2 bg-yellow-400 hover:bg-pink-200  text-black rounded-sm'>Phaser.js</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-10 gap-x-8'>
        {current==='react'?(<><Card bgImage={'/honeytype.gif'}
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
         /></>):""}
         
      </div>
    </div>
  )
}

export default Work
