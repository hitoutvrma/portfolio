import React from 'react'
import Front from './Components/Front'
import Work from './Components/Work'
import AnimatedParagraph from './Components/AnimatedParagraph'

function App() {
  const text = "heite verma"
  return (
    <div className=''>
      <AnimatedParagraph texts={}/>
      <Front/>
      <Work/>
    </div>
  )
}

export default App
