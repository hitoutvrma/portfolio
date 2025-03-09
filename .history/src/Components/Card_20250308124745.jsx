import { motion } from 'framer-motion'
function Card() {
  return (
    <motion.div animate={{scaleY:1}} className="bg-green-900 relative h-90 sm:h-70 sm:w-70 w-90 card">
            <h1 className='p-2 text-[1.9vh]'>Honeytype</h1>
            <footer className='bottom-0  absolute'>
                <button className='m-2 px-2 py-1 backdrop-blur-xl bg-white/30   text-[1.5vh] '>Web</button>
                <button className='m-2 px-2 py-1 backdrop-blur-xl bg-white/30  text-[1.5vh] '>React</button>
                </footer>
        </motion.div>
  )
}

export default Card
