import React from 'react'
import Card from './Card'

function Work() {
  return (
    <div className='h-auto min-h-screen sm:p-5 '>
      <div className='pt-15  pb-15'><p>WORK & PROJECTS</p></div>
      <div className='flex justify-between'>
        <div>React</div><div>Nodejs</div><div>Express</div><div>TailwindCSS</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-10 gap-x-8'>
        <Card bgImage={'/honeytype.gif'}
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
         />


         
      </div>
    </div>
  )
}

export default Work
