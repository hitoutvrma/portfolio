import React from 'react'
import Card from './Card'

function Work() {
  return (
    <div className='h-auto min-h-screen sm:p-5 '>
      <div className='pt-15  pb-15'><p>WORK & PROJECTS</p></div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8'>
        <Card bgImage={'/honeytype.gif'}
        //  name={"honeytype"}
         width={"sm:w-75"}
         height={"sm:h-45"}
         />

      </div>
    </div>
  )
}

export default Work
