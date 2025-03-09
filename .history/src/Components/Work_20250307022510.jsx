import React from 'react'
import Card from './Card'

function Work() {
  return (
    <div className='h-screen sm:p-5 '>
      <div className='pt-15  pb-15'><p>WORK & PROJECTS</p></div>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <Card/>
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
