import React from 'react'
import Card from './Card'

function Work() {
  return (
    <div className='h-screen sm:p-5 '>
      <div className='pt-15  pb-15'><p>WORK & PROJECTS</p></div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8'>
        <Card width={20} height={30}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Work
